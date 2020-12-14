import React from 'react'
import {StyleSheet, Text, TouchableOpacity } from 'react-native'


const StyledButton = ({onSend}) => {
    return (
        <TouchableOpacity testID="button" onPress={(val) => onSend(val)} style={styles.container}>
            <Text style={styles.text} >Add</Text>
        </TouchableOpacity>
    )
}

export {StyledButton}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '70%',
        borderRadius: 25,
        backgroundColor: '#F50057'
    },
    text: {
        fontSize: 20,
        color: 'white',
    }
})
