import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

// const {width, height} = Dimensions.get('window')

const DimensionesScreen = () => {


    const { width, height } = useWindowDimensions()
  return (

    <View>

    <View
        style={style.container}
    >
        <View
            style={style.cajaMorada}
        >
            {/* <Text>
                Dimensiones screen
            </Text> */}
        </View>
        <View
            style={style.cajaNaranja}
        >
        </View>
        
    </View>
        <Text
            style={style.title}
        > W: {width}, H: {height}
        </Text>    
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 500,
        backgroundColor: 'green'
    },
    cajaMorada: {

        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    title: {
        fontSize: 15
    }

})

export default DimensionesScreen