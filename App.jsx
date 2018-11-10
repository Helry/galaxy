/**
 * react-native-template-youngjuning
 * https://github.com/youngjuning/react-native-template-youngjuning
 * @author youngjuning
 */

import React, { Component } from 'react'
import { StyleSheet, Image, View, Button } from 'react-native'
import CodePush from 'react-native-code-push'
import checkHotUpdate from './src/utils/checkHotUpdate'
import ToastExample from './src/components/ToastExample'

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
        <Button
          onPress={() => ToastExample.show('Awesome', ToastExample.SHORT)}
          title="调用原生模块"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
