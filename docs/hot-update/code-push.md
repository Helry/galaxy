## 一、全局安装 code-push-cli

```bash
$ npm i -g code-push-cli
```

## 二、注册 App Center

执行以下命令

```bash
$ code-push register
```

或直接打开 https://appcenter.ms/ 注册

## 三、登录App Center

```bash
$ code-push login --accessKey <accessKey>
```

回车后，会打开 **App Center** 的网址。根据提示复制密钥到命令行中回车即可：

![](https://i.loli.net/2018/11/09/5be550345956e.png)

## 四、 在App Center注册App

为了让 **App Center** 有我们的App，我们需要 **App Center** 注册App，输入下面命令即可完成注册，这里需要注意如果我们的应用分为iOS和Android两个平台，这时我们需要分别注册两套key。

应用添加成功后就会返回对应的 `production` 和 `Staging` 两个key，`production` 代表生产版的热更新部署，`Staging` 代表开发版的热更新部署，在 ios 中将 `staging` 的部署 key 复制在 `info.plist`的 `CodePushDeploymentKey` 值中，在 android 中复制在 Application 的 getPackages 的 CodePush 中。

### 4.1 添加iOS平台应用

```bash
$ code-push app add iOSRNHybrid ios react-native
```

**执行结果：**

![](https://i.loli.net/2018/11/09/5be5528e9bcd5.png)

### 4.2 添加 android 命令

```bash
$ code-push app add iOSRNHybridForAndroid Android react-native
```

**执行结果：**

![](https://i.loli.net/2018/11/09/5be552ec02364.png)

## 五、查看添加的App

```bash
$ code-push app list
```

## 六、RN 集成 code-push

### 6.1 安装

> 执行 `link` 命令会让你输入 `Android` 和 `iOS` 两个平台的 `key`，可以忽略，也可以直接填写。

```bash
$ yarn add react-native-code-push
$ react-native link react-native-code-push
```

::: tip
可以通过 `code-push deployment ls <appName> -k` 命令查看应用的key
:::

### 6.2 配置 key

> 这节是可选的，如果事多部署环境的话请参考第九节

- 在 `ios` 中将 `staging` 的部署 `key` 复制在 `info.plist`的 `CodePushDeploymentKey` 值中，
- 在 `android` 中复制在 `Application` 的 `getPackages` 的 `CodePush` 中或 `<string moduleConfig="true" name="reactNativeCodePush_androidDeploymentKey"><!--here your code-push key--></string>` 中

### 6.2 配置

我们在RN项目的根组件中添加热更新逻辑代码如下：

**App.jsx**

```js
import React, { Component } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import CodePush from 'react-native-code-push'
import checkHotUpdate from './src/utils/checkHotUpdate'

const codePushOptions = {
  // 设置检查更新的频率
  // ON_APP_RESUME APP恢复到前台的时候
  // ON_APP_START APP开启的时候
  // MANUAL 手动检查
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
}

class App extends Component {
  componentDidMount() {
    CodePush.disallowRestart()// 禁止重启
    checkHotUpdate(CodePush) // 开始检查更新
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          source={{ uri: 'https://placeimg.com/400/400/any' }}
          style={[styles.welcome]}
        />
        <Text onPress={() => { alert('我是文字') }}>React Native Text</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  welcome: {
    width: 400,
    height: 400,
  },
})

export default CodePush(codePushOptions)(App)
```

**checkHotUpdate.js**

```js
export default (CodePush) => {
  CodePush.sync(
    {
      installMode: CodePush.InstallMode.IMMEDIATE,
      // updateDialog: {},
    },
    (status) => {
      switch (status) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE: // 检查更新
          break
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE: // 正在下载
          break
        case CodePush.SyncStatus.AWAITING_USER_ACTION: // 等待用户操作
          break
        case CodePush.SyncStatus.INSTALLING_UPDATE: // 下载更新
          break
        case CodePush.SyncStatus.UP_TO_DATE: // 已更新
          break
        case CodePush.SyncStatus.UPDATE_IGNORED: // 忽略更新
          break
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          break
        case CodePush.SyncStatus.UNKNOWN_ERROR: // 未知错误
          break
      }
    },
    ({ receivedBytes, totalBytes }) => {
      // const progress = parseFloat(receivedBytes / totalBytes).toFixed(2)
      if (receivedBytes >= totalBytes) {
        CodePush.allowRestart() // 强制更新
      }
    },
  )
}
```

## 七、 如何发布CodePush更新包

#### 7.1、手动生成bundle包【可略过】

::: tip
在将RN的 `bundle` 放到 **AppCenter** 服务器之前，我们需要先生成 `bundle`，再将 `bundle` 上传到 **AppCenter**。用到的文件夹必须已经存在。
:::

- 生成 `bundle` 命名：`react-native bundle --platform 平台 --entry-file 启动文件 --bundle-output 打包js输出文件 --assets-dest 资源输出目录 --dev 是否调试`

```bash
$ react-native bundle --platform android --entry-file index.js --bundle-output ./bundle/android/main.jsbundle --assets-dest ./bundle/android --dev false
```

#### 7.2、生成并上传bundle

> 生成bundle文件并上传到CodePush，我们直接执行下面的命令即可

```bash
$ code-push release-react <AppName> <Platform> --t <本更新包面向的旧版本号> --des <本次更新说明>
```

::: tip
**CodePush** 默认是更新 **Staging** 环境的，如果发布生产环境的更新包，需要指定 `-d` 参数：`-d Production`，如果发布的是强制更新包，需要加上 `-m true` 强制更新。`--dev` 为是否启用开发者模式（默认为 false）
:::

```bash
$ code-push release-react iOSRNHybrid ios --t 1.0.0 --des '这是第一个更新包' -d Production  -m true
```

#### 7.3、查看发布的历史记录

```bash
$ code-push deployment history <projectName> <Staging/Production>
```

## 八、添加部署环境（可选）

当一个用 AppCenter 服务注册的应用，它默认包含两个部署环境：`Staging` 和 `Production` 。这让你可以理解发布更新到一个内部的环境，你可以在推送到终端用户之前彻底的测试每个更新。这个工作流是至关重要的，以确保你的版本准备好给大众，而且这是一个在Web上实践很久的惯例。

如果你的App有 `Staging` 和 `Production` 环境其实已经满足了你的需求，然后你不需要做任何事情。不过，如果你需要 `alpha`，`dev`等部署环境，那你可以简单的使用如下命令创建：

```bash
$ code-push deployment add <appName> <deploymentName>
```

## 九、多部署环境key配置

### 9.1、安卓

1. 打开`android/app/build.gradle`,找到 `android { buildTypes {} }` 部分并为你的 `debug` 和 `release` 构建类型都定义 `buildConfigField` 配置项。构建类型 `debug` 对应 AppCenter 发布类型 `Staging`，同理 `release` 对应 `Production`。如果你喜欢，你可以定义把你的key定义在 `gradle.properties`，然后引用他们。怎么配置全凭个人喜好。

```groovy
android {
    ...
    buildTypes {
        debug {
            ...
            // 注意： 由于会被 RN packager 覆盖，所以CodePush 更新不应该在 Debug 模式下被测试。然而由于 CodePush 在所有模式下都会检查更新，所有我们必须提供一个key（如果你在前端判断了模式，那就不用）
            buildConfigField "String", "CODEPUSH_KEY", '""'
            ...
        }

        releaseStaging {
            ...
            buildConfigField "String", "CODEPUSH_KEY", '"<INSERT_STAGING_KEY>"'
            ...
        }

        release {
            ...
            buildConfigField "String", "CODEPUSH_KEY", '"<INSERT_PRODUCTION_KEY>"'
            ...
        }
    }
    ...
}
```

::: tip
1. 提醒一句，你可以在命令行通过 `code-push deployment ls <APP_NAME> -k` 获取他们的 `keys`。
2. `releaseStaging` 的命名是由于[这一行](http://t.cn/EAnyAzi)
:::

2. 通过刚刚定义的构建配置将部署密钥传递给CodePush构造函数，而不是字符串文字。

打开 `src/main/.../MainApplication.java` 文件并做如下配置：

```java
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        ...
        new CodePush(BuildConfig.CODEPUSH_KEY, MainApplication.this, BuildConfig.DEBUG), // Add/change this line.
        ...
    );
}
```

### 9.2 iOS

<!-- todo -->

#### 关于多部署打包

**Production**

```bash
$ cd android && ./gradlew assembleRelease
```

```bash
$ cd android && ./gradlew installRelease
```

**Staging**

```bash
$ cd android && ./gradlew assembleReleaseStaging
```

```bash
$ cd android && ./gradlew installReleaseStaging
```

## 十、附录

### 10.1、参考

- [Microsoft/code-push ](http://t.cn/RUzsKDO)
- [Microsoft/react-native-code-push](http://t.cn/R4Nzj11)
- [CodePush热更新详细接入教程](http://t.cn/EAtVS21)
- [React Native热更新部署/热更新-CodePush最新集成总结(新)](http://t.cn/EAHMYiw)

### 10.2、命令

#### 手动生成bundle

```bash
$ react-native bundle --platform 平台 --entry-file 启动文件 --bundle-output 打包js输出文件 --assets-dest 资源输出目录 --dev 是否调试
```

#### 账号相关

- `code-push register`: 注册
- `code-push login`: 登陆
- `code-push login --accessKey <accessKey>`: 执行“无头”身份验证，而不是启动一个浏览器
- `code-push logout`: 注销
- `code-push whoami`: 显示与你当前认证会话相关的e-mail帐号

#### token相关

- `code-push access-key ls`: 列出登陆的token
- `code-push access-key rm <accessKye>`: 删除某个 access-key
- `code-push access-key add "VSTS Integration"`: 创建一个持久的Access Key(连同一个描述)

#### app相关

- `code-push app add iOSRNHybrid ios react-native`: 添加ios平台应用
- `code-push app add iOSRNHybridForAndroid Android react-native`: 添加android平台应用
- `code-push app ls`: 查看添加的app
- `code-push app rm <appName>`: 在账号里移除一个app
- `code-push app rename <appName> <newAppName>`: 重命名一个存在的app
- `code-push app transfer`: 把app的所有权转移到另外一个账号

#### 应用合作

- `$ code-push collaborator add <appName> <collaboratorEmail>`: 和其它开发者在一起合作同一个CodePush应用
- `code-push collaborator rm <appName> <collaboratorEmail>`: 解除合作者关系
- `code-push collaborator ls <appName>`: 列出所有合作者

#### 发布相关

- `code-push release-react <AppName> <Platform> --t <本更新包面向的旧版本号> --des <本次更新说明> -d <Staging/Production> -m <是否强制更新>`: 发布新的热更新版本

#### 部署相关

- `code-push deployment add <appName> <deploymentName>`: 添加部署环境
- `code-push deployment rm <appName> <deploymentName>`: 删除部署环境
- `code-push deployment rename <appName> <deploymentName> <newDeploymentName>`: 重命名部署环境
- `code-push deployment ls <appName> [--displayKeys|-k]`: 查看部署环境列表
- `code-push deployment history <projectName> <Staging/Production>`: 查看发布历史
- `code-push deployment clear <appName> <deploymentName>`: 清除发布历史
