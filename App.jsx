/**
 * galaxy
 * https://github.com/youngjuning/galaxy
 * @author youngjuning
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CodePush from 'react-native-code-push'
import Config from 'react-native-config'
import checkHotUpdate from './src/utils/checkHotUpdate'

const codePushOptions = {
  // 设置检查更新的频率
  // ON_APP_RESUME APP恢复到前台的时候
  // ON_APP_START APP开启的时候
  // MANUAL 手动检查
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    CodePush.disallowRestart()// 禁止重启
    if (!__DEV__) {
      checkHotUpdate(CodePush) // 开始检查更新
    }
    console.log('Config', Config)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(Config)}</Text>
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
})

export default CodePush(codePushOptions)(App)
