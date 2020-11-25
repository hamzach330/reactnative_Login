import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'


export default class App extends Component {
  render() {
    return (
      <View style={styles.statusBarBackground}>
        <Text>Login Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'white',
    alignContent: 'center'
  },
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "white",
  }
})
