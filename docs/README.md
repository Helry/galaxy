# 配置

## 一、搭建开发环境

::: tip
React Native 中文网（以下我们简称“中文网”）对此已经做了详尽的说明，请移步：[搭建开发环境](http://t.cn/EwjUTLT)
:::

作为补充，这里我们奉上 NodeJs、Java环境的配置和维护：

- NodeJs开发环境维护：[http://t.cn/EwjGwYE](http://t.cn/EwjGwYE)
- Java环境维护：[http://t.cn/EwjGwYE](http://t.cn/EwjG8TQ)

## 二、工具

### 调试工具

- react-devtools
  - [Chrome React Developer Tools](http://t.cn/RZ9KB7U)
  - [Firefox React Developer Tools](http://t.cn/EhzaHUR)
  - [Standalone app](http://t.cn/Ewjqgec)
- [react-native-debugger](http://t.cn/EhzKUdI)
- [reactotron](http://t.cn/EhzKUdI)

### 优化分析工具

- [nimbledroid](https://nimbledroid.com/)

### 反编译工具

- [jadx](https://github.com/skylot/jadx)

### 模拟器调试

1. 下载安装 [MUMU模拟器](http://mumu.163.com/)
2. 打开MUMU模拟器
3. 执行 `adb connect 127.0.0.1:7555` 连接MUMU模拟器
4. 启动项目：`react-native run-android`

## 三、创建一个新项目

使用 React Native 命令行工具来创建一个名为"AwesomeProject"的新项目：

```bash
$ react-native init AwesomeProject
```

::: tip
- 你可以使用 `--version` 参数（注意是两个杠）创建指定版本的项目。例如 `react-native init MyApp --version 0.44.3`。注意版本号必须精确到两个小数点。
- 你还可以使用 `--tepmlate` 参数创建指定模版的项目。例如 `react-native init MyApp --template youngjuning`。模版可以去 npm 搜索，格式是 `react-native-template-*`
:::

### react-native 0.57.* 适配

- [react-native-releases/CHANGELOG.md](http://t.cn/EwYmviS)
- [react-native版本迁移教程](https://www.jianshu.com/p/cc0174b4a9c5)

### ES6 装饰器(decorators)及runtime 支持

1. 安装babel相关库： `yarn add @babel/core @babel/plugin-proposal-decorators @babel/plugin-transform-runtime @babel/runtime`
2. 如果使用了装饰器（Mobx用得到），则需要配置 `.babelrc`:
```json
"plugins": [
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ["@babel/transform-runtime", {"helpers": true,"regenerator": false }]
]
```

### Symbol语法支持

> 如果还不知道 Symbol 为何物的朋友，墙裂推荐读读 [ES6的Symbol竟然那么强大，面试中的加分点啊](http://t.cn/EwuvKej) 这篇文章

::: warning
Can't find variable: Symbol
:::

如上警告，不幸的是，React Native 中默认是不支持 Symbol的，幸运的是我们并不是对此束手无策，下面我就为大家推荐两种解决办法：

你可是使用 ES6 Symbol polyfill 来支持：

```bash
$ yarn add es6-symbol
```

并把下面的代码加入 `index.js`

```
import 'es6-symbol/implement'
```

另外，我们也推荐 [jsc-android](http://t.cn/EwuPlyh)，使用它你可以不必使用polyfill，并且它还能使你的app更快。

## 四、优化开发体验

### 4.1、npm scripts

你是否还在使用冗长的命令调试项目？

你是否还在手动删除 `build` 文件夹？？

你是否还在为以上问题而苦恼？？？

解决麻烦的方法其实很简单，那就是配置常用的命令到 `npm scripts` 中去（`package.json` 的 `scripts` 配置项）,一下就是本库的 `npm scripts`

```json
"scripts": {
  "start": "node node_modules/react-native/local-cli/cli.js start",
  "test": "jest",
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs",
  "clean": "cd android && ./gradlew clean",
  "dev": "yarn clean && react-native run-android",
  "assembleRelease": "cd android && ./gradlew assembleRelease",
  "installRelease": "cd android && ./gradlew installRelease",
  "keygen": "keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 36500",
  "key-debug": "keytool -list -v -keystore ~/.android/debug.keystore",
  "key-release": "keytool -v -list -keystore  ./android/app/my-release-key.keystore",
  "bundle-android": "react-native bundle --entry-file index.js --bundle-output ./android-bundle/index.android.bundle --platform android --assets-dest ./android-bundle --dev false --sourcemap-output ./android-bundle/android-release.bundle.map",
  "bundle-ios": "react-native bundle --entry-file index.js --bundle-output ./ios-bundle/index.ios.bundle --platform ios --assets-dest ./ios-bundle --dev false --sourcemap-output ./ios-bundle/ios-release.bundle.map",
  "code-push-ios": "code-push release-react mobileapp  ios  -d Staging --targetBinaryVersion 1.0.0",
  "code-push-android": "code-push release-react mobileapp  android  -d Staging --targetBinaryVersion 1.0.0"
}
```

### 4.2、让 react-native 支持使用 .jsx 后缀

配置这个并不只是强迫症所致（完全是强迫症所致），而是为了让编辑器更好的区别 `js` 语法和 `jsx` 语法。

**> 0.57.***

在项目根目录新建 **metro.config.js** 文件并写入以下内容：

```js
// @name Make ReactNative Great Again
// @description Allows you to enable support for JSX files, and `.mjs` files which is the new node standard
// @source http://www.fallingcanbedeadly.com/posts/enabling-react-native-jsx-extension
// @source https://github.com/airbnb/javascript/issues/982
// @note One caveat, The `index.js` file in the root of your project has to be `.js`.
module.exports = {
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
  },
}
```

**< 0.57.***

```js
// @name Make ReactNative Great Again
// @description Allows you to enable support for JSX files, and `.mjs` files which is the new node standard
// @source http://www.fallingcanbedeadly.com/posts/enabling-react-native-jsx-extension
// @issues https://github.com/airbnb/javascript/issues/982
// @issues https://github.com/facebook/metro/issues/248
// @note One caveat, The `index.js` file in the root of your project has to be `.js`.
module.exports = {
  getSourceExts: () => ['jsx', 'mjs', 'js'],
}
```

### 4.3、eslint

参考 [http://t.cn/Ewc4CVH](http://t.cn/Ewc4CVH)

### 4.4、editorconfig

```yml
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.gradle]
indent_size = 4

[BUCK]
indent_size = 4
```

### 4.5、屏蔽所有 YellowBox

**index.js**

```js
// 关闭全部的警告
YellowBox.ignoreWarnings([''])

// 或者通过这句代码屏蔽 YellowBox
// console.disableYellowBox = true
```

### 4.6、console.* 语句自动删除

首先需要使用 `yarn add --dev babel-plugin-transform-remove-console` 来安装，然后在项目根目录下编辑（或者是新建）一个名为  `.babelrc` 的文件，在其中加入：

```json
{
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  }
}
```

## 五、Android

### 5.1、Maven 仓库

::: tip
aliyun是为了加快下载速度、jitpack是因为有些库需要它
:::

将以下代码配置到`android/build.gradle` 配置文件的 `buildscript/repositories` 和 `allprojects/repositories` 下

```grrovy
maven{
    url 'http://maven.aliyun.com/nexus/content/groups/public/'
    name 'aliyun'
}
maven {
    url "https://jitpack.io"
    name 'jitpack'
}
```

### 5.2、打包APK

1. 在项目根目录执行 `yarn keygen` 生成密钥文件 `my-release-key.keystore`
2. 把 `my-release-key.keystore` 文件放到你工程中的 `android/app` 文件夹下。
3. 编辑 `android/gradle.properties` ，添加如下的代码（注意把其中的****替换为相应密码）
3. 编辑 `android/gradle.properties` ，添加如下的代码（注意把其中的****替换为相应密码）

```properties
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=****
MYAPP_RELEASE_KEY_PASSWORD=****
```

4. 配置 **android/app/build.gradle**

```groovy
android{
    signingConfigs {
        debug {}
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
            ...
        }
    }
}
```

### 5.3、打包优化

#### 1、启用 Proguard 代码混淆来缩小 APK文件的大小

Proguard是一个Java字节码混淆压缩工具，它可以移除掉 React Native Java（和它的依赖库中）中没有被使用到的部分，最终有效的减少APK的大小。

打开 `android/app/build.gradle` 文件，设置 `minifyEnabled` 选项为 `true`：

```groovy
def enableProguardInReleaseBuilds = true
```

::: warning
警告：启用Proguard之后，你必须再次全面地测试你的应用。Proguard有时候需要为你引入的每个原生库做一些额外的配置。参见 app/proguard-rules.pro 文件和每个原生库的安装说明

当您使用ProGuard时，您必须始终解决所有警告。

这些警告告诉你，这些库引用了一些代码，没有任何来源。那可能可能不行这取决于有问题的代码是否被调用。http://t.cn/EwIL17p
:::

#### 2、配置 PackagingOptions

打开 `android/app/build.gradle` 文件

```grrovy
// 打包配置（http://t.cn/Ewt1xD2）
packagingOptions {
    /**
     * 1、pickFirsts:当出现重复文件，会使用第一个匹配的文件打包进入apk
     * 2、merges:当出现重复文件，合并重复的文件打入apk
     * 3、excludes:打包的时候排除匹配的文件
     */
    /* pickFirsts = ['META-INF/LICENSE'] */
    /* merge 'META-INF/LICENSE' */
    exclude 'META-INF/LICENSE'
    exclude 'META-INF/NOTICE.txt'
}
```

#### 3、配置 splits（可选）

默认情况下，生成的 APK 会同时包含针对于 x86 和 ARMv7a 两种 CPU 架构的原生代码。这样可以让我们更方便的向其他人分享这个 APK，因为它几乎可以运行在所有的 Android 设备上。但是，这会导致所有设备上都有一些根本不会运行的代码，白白占据了空间。目前安卓设备绝大多数是 ARM 架构，因此对于大部分应用来说可以考虑去掉 x86 架构的支持。

你可以在 `android/app/build.gradle` 中修改如下代码（false 改为 true）来生成针对不同 CPU 架构的 APK。

> 具体参考：[http://t.cn/Ewchm37](http://t.cn/Ewchm37)

#### 4、开启 zipAlignEnabled

> zipalign的工具的使用：[http://t.cn/EwcA9K8](http://t.cn/EwcA9K8)

这里只是优化apk，没有执行压缩相关操作

```groovy
buildTypes {
  release {
      signingConfig signingConfigs.release
      minifyEnabled enableProguardInReleaseBuilds
      zipAlignEnabled true // 对齐zip
      proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
  }
}
```

#### 6、开启 shrinkResources 和 设置debuggable为false

> 移除无用的resource文件：[http://t.cn/EwcLLUa](http://t.cn/EwcLLUa)

```groovy
buildTypes {
  release {
      signingConfig signingConfigs.release
      minifyEnabled enableProguardInReleaseBuilds
      zipAlignEnabled true
      shrinkResources true // 移除无用的resource文件
      debuggable false // 是否debug
      proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
  }
}
```

#### 6、去除无用的语言资源

通过配置 `android/defaultConfig/resConfigs`  可以选择只打包哪几种语言，进而去掉各种 `aar` 包中全世界的语言，尤其是 **support** 包中的。

选择保留什么语言要根据产品的用户和市场来定，如果只选择默认英语和中文语言，配置如下：

```groovy
defaultConfig {
	...
    resConfigs "en","zh" // 只使用英语和中文语言
    ...
}
```

#### 7、避免使用重复的库

```groovy
compile('com.facebook.android:audience-network-sdk:4.23.0', {
    exclude group: 'com.android.support', module: 'appcompat-v7'// 因为项目引用了v7包，这里排除第三方库的v7包，避免重复
})
compile('com.google.firebase:firebase-ads:9.6.1', {
    exclude group: 'com.android.support' // 因为项目引用了v7包，这里排除第三方库的v7包，避免重复
})
```

#### 8、使用 implementation 代替 compile

![](https://i.loli.net/2018/11/02/5bdb50fb13fa5.png)

如图，'compile' 已经被废弃并且已经被 'impementation' 和 'api' 代替.而且 2018 年底会彻底废弃，修复的话就是把 **android\app\build.gradle** 中的 `dependencies` 配置中的 `compile` 改为 `impementation`。

#### 9、配置 dexOptions.javaMaxHeapSize

> android studio 需要较大的内存才能正常编译项目

在 **android\gradle.properties** 中加入以下配置

```properties
# 主要解决这个警告：com.android.build.api.transform.TransformException：http://t.cn/EZcTDtV
dexOptions.javaMaxHeapSize = 2g
```

#### 10、配置方法数超过 64K 的应用

> 随着 Android 平台的持续成长，Android 应用的大小也在增加。当您的应用及其引用的库达到特定大小时，您会遇到构建错误，指明您的应用已达到 Android 应用构建架构的极限。会报告这一错误：
>
>  The number of method references in a .dex file cannot exceed 64K.

解决办法是配置您的应用进行 Dalvik 可执行文件分包：

在 **android/app/build.gradle** 中做下面的配置：

```groovy
android {
    ...
    defaultConfig {
        ...
        multiDexEnabled true
        ...
    }
    ...
}
```

#### 11、删除未使用到xml和图片

如何知道哪些xml和图片未被使用到？使用Android Studio的Lint，步骤：

1. `Android Studio` -> `Menu` -> `Refactor` -> `Remove Unused Resources`
2. 选择 `Refactor` 一键删除
3. 选择 `Perview` 预览未使用到的资源

或者

点击菜单栏 `Analyze` -> `Run Inspection by Name` -> `unused resources` -> `Moudule ‘app’` -> `OK`，这样会搜出来哪些未被使用到未使用到xml和图片，如下：

![](http://wuxiaolong.me/images/reduceAPKSize1.png)

#### 12、删除未使用到代码

同样使用 Android Studio 的 Lint ，步骤：点击菜单栏 `Analyze` -> `Run Inspection by Name` -> `unused declaration` -> `Moudule ‘app’` -> `OK`

#### 13、使用微信Android资源混淆工具（可选）

微信AndResGuard是一个帮助你缩小APK大小的工具，详情：![Android资源混淆工具使用说明](https://github.com/shwenzhang/AndResGuard)。使用方法：

### 5.4 自定义安卓打包的后缀

```groovy
...
def releaseTime() {
    return new Date().format("yyyyMMdd-HHmmss", TimeZone.getTimeZone("GMT+08:00"))
}
...
android: {
    applicationVariants.all { variant ->
    		variant.outputs.all {
            // the apk name is e.g. sishucloudapp_v1.0_2018-11-1.apk
            outputFileName = "sishucloudapp_${defaultConfig.versionName}_${releaseTime()}.apk"
        }
        ...
    }
}
...
```

### 5.5、配置App名称

很简单,我们直接打开 **android/app/src/main/res/values/strings.xml**，即可看到配置中的 `app_name`，修改为你想要的即可:

```xml
<resources>
  <string name="app_name">银河</string>
</resources>
```

### 5.6、修改App的图标

也很简单，在 **android\app\src\main\res\mipmap-xxxxxx** 中直接覆盖图标就可以，注意图标的大小。

## 其他

### 处理系统文字

#### Android

在 **android\app\src\main\java\com\galaxy\MainApplication.java** 文件中加入如下代码：

```java
...
import android.content.res.Configuration;
import android.content.res.Resources;
...
// 让文字不随系统文字变化：http://t.cn/Rs26Veb
@Override
public void onConfigurationChanged(Configuration newConfig) {
  if (newConfig.fontScale != 1)//非默认值
    getResources();
  super.onConfigurationChanged(newConfig);
}

@Override
public Resources getResources() {
  Resources res = super.getResources();
  if (res.getConfiguration().fontScale != 1) {//非默认值
    Configuration newConfig = new Configuration();
    newConfig.setToDefaults();//设置默认
    res.updateConfiguration(newConfig, res.getDisplayMetrics());
  }
  return res;
}
```

#### iOS

1. 安装 **react-native-add-custom-props** : `yarn add react-native-add-custom-props`
2. 在 `index.js` 中配置如下
```js
...
import addCustomProps from 'react-native-add-custom-props'
...
// 处理ios系统文字
if (iOS) {
  addCustomProps(Text, { allowFontScaling: false })
  addCustomProps(TextInput, { allowFontScaling: false })
}
```
