import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'


interface Props {
    position: 'br' | 'bl',
    title: string,
    onPress: ()=> void,

}

const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
    <>
    <View
        style={ [
            styles.fabLocation,
            (position === 'bl')
            ? styles.left
            : styles.right
        ]}
    >
    <TouchableNativeFeedback
            onPress={ () => onPress()}
            background={ TouchableNativeFeedback.Ripple('gray', false, 30) }
        >
            <View
                style={ styles.fab }
            >
                <Text
                    style={ styles.fabText }
                >
                    {title}
                </Text>
            </View>
        </TouchableNativeFeedback>
    </View>

    </>
  )
}

const styles = StyleSheet.create({
    fabLocation: {
        position:'absolute',
        bottom: 20,
    },
    right: {
        right: 15
    },
    left: {
        left: 15
    },
    fab: {
        backgroundColor: '#3FD5F8',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 4,
    },
    fabText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default Fab