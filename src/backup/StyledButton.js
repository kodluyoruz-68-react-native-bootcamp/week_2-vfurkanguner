import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


const StyledButton = ({note, onAddTodo }) => {
    return (
        <TouchableOpacity testID="button" onPress={() => onAddTodo(text)} style={styles.container}>
            <Text style={styles.text} >Add</Text>
        </TouchableOpacity>
    )
}

export { StyledButton }

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 122,
        height: 47,
        borderRadius: 39,
        backgroundColor: '#F50057'
    },
    text: {
        fontSize: 20,
        color: 'white',
    }
})
