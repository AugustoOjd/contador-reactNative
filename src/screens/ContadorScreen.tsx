import React, { useState } from 'react'
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const ContadorScreen = () => {

    const [contador, setContador] = useState(10)


    const changeState = () =>{

    }


  return (
    <View
        style={ styles.container }
    >
        <Text
        style={ styles.title }
        >
            Contador: {contador}
        </Text>
        
        <TouchableOpacity
            onPress={ () => setContador( contador + 1)}
        >
            <View
                style={ styles.botonIncrementar }
            >
                <Text>
                    +1
                </Text>
            </View>
        </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        top: -50
    },
    botonIncrementar: {
        backgroundColor: 'blue',
        borderRadius: 100
    }
})

export default ContadorScreen