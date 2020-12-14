import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Item = ({note}) => {
    return (
        <View style={styles.container} >
            <View style={{flexDirection: 'row' }}>    
            <View style={styles.box} /> 
            <Text style={styles.text}>{note.title} </Text>
            </View>
        </View>
    )
}

export {Item}

const styles = StyleSheet.create({
    container: {
        height: 68,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        margin: 10,
        borderWidth: 0.3,
        borderRadius: 12,
        borderColor: '#707070',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: .8
    },
    box: {
        width: 20,
        height: 20,
        marginRight: 15,
        borderRadius: 20,
        backgroundColor: '#F50057'
    },
    text: {
        fontSize: 20
    }
})
