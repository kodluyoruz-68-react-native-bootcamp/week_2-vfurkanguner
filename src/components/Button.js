import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ onSend }) => {
    return (
        <TouchableOpacity testID="button" onPress={() => onSend()} style={styles.container} >
            <Text style={styles.text} >Add</Text>
        </TouchableOpacity>
    )
}

export { Button }

const styles = StyleSheet.create({
    container: {
        width: '30%',
        height: '50%',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        borderRadius: 35,
        backgroundColor: "#F50057"
    },
    text: {
        fontSize: 18,
        color: "#FFF"
    }
})
