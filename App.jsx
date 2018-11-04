/**
 * react-native-template-youngjuning
 * https://github.com/youngjuning/react-native-template-youngjuning
 * @author youngjuning
 */

import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const App = () => (
  <View style={styles.container}>
    <Image
      resizeMode="cover"
      source={{ uri: 'https://placeimg.com/400/400/any' }}
      style={[styles.welcome]}
    />

    <Text>React Native Text</Text>
  </View>
)

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

export default App
