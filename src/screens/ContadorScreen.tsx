import React, { useState } from 'react'
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Fab from '../components/Fab'

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
        
        <Fab
            title='+1'
            position='br'
            onPress={()=> setContador(contador + 1)}
        />

        <Fab
            title='-1'
            position='bl'
            onPress={()=> setContador(contador - 1)}
        />

        {/* <TouchableOpacity
            style={ styles.fabLocationBL }
            onPress={ () => setContador( contador - 1)}
        >
            <View
                style={ styles.fab }
            >
                <Text
                    style={ styles.fabText }
                >
                    -1
                </Text>
            </View>
        </TouchableOpacity> */}

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
    }

})

export default ContadorScreen