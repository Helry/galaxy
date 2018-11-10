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
> 在 `ios` 中将 `staging` 的部署 `key` 复制在 `info.plist`的 `CodePushDeploymentKey` 值中，
> 在 `android` 中复制在 `Application` 的 `getPackages` 的 `CodePush` 中。

```bash
$ yarn add react-native-code-push
$ react-native link react-native-code-push
```

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

### 6.3 使用

#### 上传 bundle

将生成的bundle文件上传到CodePush，我们直接执行下面的命令即可：

```bash
$ code-push release-react <AppName>
```

```json
"scripts": {
  "push": "yarn push-android && yarn push-ios",
  "push-android": "code-push release-react galaxyForAndroid android -d Staging",
  "push-ios": "code-push release-react galaxyForIOS ios -d Staging"
}
```

## 附录

### 命令

#### 账号相关

- `code-push register`: 注册
- `code-push login`: 登陆
- `code-push logout`: 注销
- `code-push access-key ls`: 列出登陆的token
- `code-push access-key rm <accessKye>`: 删除某个 access-key

#### App相关

- `code-push app add iOSRNHybrid ios react-native`: 添加ios平台应用
- `code-push app add iOSRNHybridForAndroid Android react-native`: 添加android平台应用
- `code-push app ls`: 查看添加的app
- `code-push app rm`: 在账号里移除一个app
- `code-push app rename`: 重命名一个存在的app
- `code-push app transfer`: 把app的所有权转移到另外一个账号
