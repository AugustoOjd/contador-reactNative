import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen'
import ContadorScreen from './src/screens/ContadorScreen'
import DimensionesScreen from './src/screens/DimensionesScreen'
import HolaMundoScreen from './src/screens/HolaMundoScreen'
import PositionScreen from './src/screens/PositionScreen'

const App = () => {
  return (
    <>
      {/* <HolaMundoScreen/> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      <SafeAreaView
        style={{ flex: 1}}
      >
        {/* <DimensionesScreen/> */}
        <PositionScreen/>
      </SafeAreaView>
    </>

  )
}

export default App
