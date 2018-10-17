import {
  AppRegistry, YellowBox, Text, TextInput, Platform,
} from 'react-native'
import addCustomProps from 'react-native-add-custom-props'
import App from './App'
import { name as appName } from './app.json'

// 处理ios系统文字
if (Platform.OS === 'ios') {
  addCustomProps(Text, { allowFontScaling: false })
  addCustomProps(TextInput, { allowFontScaling: false })
}

// 在发布时屏蔽掉所有的 console.* 调用
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {},
  }
}

// 关闭全部的黄屏警告
YellowBox.ignoreWarnings([''])

AppRegistry.registerComponent(appName, () => App)
