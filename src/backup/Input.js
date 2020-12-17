import React,{useState} from 'react'
import { StyleSheet, TextInput, View, Dimensions } from 'react-native'

//Const
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Input = ({onChange}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput testID="input"  onChangeText={onChange} placeholder="Add todo..." />
        </View>
    )
}

export { Input }

const styles = StyleSheet.create({
    inputContainer: {
        width: 273,
        height: 47,
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: "white"
    }
})
