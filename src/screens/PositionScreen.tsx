import React from 'react'
import { View, StyleSheet } from 'react-native';

const PositionScreen = () => {
  return (
    <View
        style={ styles.container}
    >
        <View
            style={ styles.cajaMorada}
        />
        <View
            style={ styles.cajaNaranja}
        />
        <View
            style={ styles.cajaVerde}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'row'
        // justifyContent: 'flex-end',
        // alignItems: 'center'
    },
    cajaMorada: {
        flex: 1,
        // width: 100,
        // height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        // top: 210
    },
    cajaNaranja: {
        flex: 1,
        // width: 100,
        // height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white',
    },
    cajaVerde: {
        flex: 1,
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
    }
})

export default PositionScreen