import { AppRegistry, YellowBox, Text, TextInput } from 'react-native'
import addCustomProps from 'react-native-add-custom-props'
import './src/utils/global'
import App from './App'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings(['']) // 关闭全部的警告

// 处理ios系统文字
if (iOS) {
  addCustomProps(Text, { allowFontScaling: false })
  addCustomProps(TextInput, { allowFontScaling: false })
}

AppRegistry.registerComponent(appName, () => App)
