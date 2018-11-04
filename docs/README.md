# 配置

## 一、搭建开发环境

::: tip
React Native 中文网（以下我们简称“中文网”）对此已经做了详尽的说明，请移步：[搭建开发环境](http://t.cn/EwjUTLT)
:::

作为补充，这里我们奉上 NodeJs、Java环境的配置和维护：

- NodeJs开发环境维护：[http://t.cn/EwjGwYE](http://t.cn/EwjGwYE)
- Java环境维护：[http://t.cn/EwjGwYE](http://t.cn/EwjG8TQ)

## 二、调试工具

- react-devtools
  - [Chrome React Developer Tools](http://t.cn/RZ9KB7U)
  - [Firefox React Developer Tools](http://t.cn/EhzaHUR)
  - [Standalone app](http://t.cn/Ewjqgec)
- [react-native-debugger](http://t.cn/EhzKUdI)
- [reactotron](http://t.cn/EhzKUdI)

## 三、创建一个新项目

使用 React Native 命令行工具来创建一个名为"AwesomeProject"的新项目：

```bash
$ react-native init AwesomeProject
```

::: tip
- 你可以使用 `--version` 参数（注意是两个杠）创建指定版本的项目。例如 `react-native init MyApp --version 0.44.3`。注意版本号必须精确到两个小数点。
- 你还可以使用 `--tepmlate` 参数创建指定模版的项目。例如 `react-native init MyApp --template youngjuning`。模版可以去 npm 搜索，格式是 `react-native-template-*`
:::

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
