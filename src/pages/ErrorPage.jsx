import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ErrorView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>I am the ErrorView component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default ErrorView
