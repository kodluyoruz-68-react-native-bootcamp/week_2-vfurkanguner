import React from 'react'
import { StyleSheet, TextInput, View, Dimensions } from 'react-native'

//Const
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Input = ({ onChange }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput testID="input" onChangeText={(text) => onChange(text)} placeholder="Add todo..." />
        </View>
    )
}

export { Input }

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 20,
        width: SCREEN_WIDTH * .7,
        height: SCREEN_HEIGHT / 16,
        borderRadius: 50,
        backgroundColor: "white"
    }
})
