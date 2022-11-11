import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View
      style={ styles.container }
    >
        <Text
          style={ styles.title }
        >
            Box Object Model
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1
  },
  title: {
    padding: 20,
    fontSize: 30,
    borderWidth: 5
    // backgroundColor: 'green'
  }
})

export default BoxObjectModelScreen