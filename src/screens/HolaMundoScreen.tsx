import React from 'react'
import { Text, View } from 'react-native'

const HolaMundoScreen = () => {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: 'gray',
    }}
    >
    <Text
      style={{
        fontSize: 40,
        textAlign: 'center',
        color: 'Cyan'
      }}
    >
      Hola React Native
    </Text>
  </View>
  )
}

export default HolaMundoScreen