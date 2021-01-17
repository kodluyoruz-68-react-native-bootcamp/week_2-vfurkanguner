import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = ({ onChangeText }) => {
    return (
        <View style={styles.container} >
            <TextInput testID="input" onChangeText={onChangeText} placeholder="Add todo..." />
        </View>
    )
}

export { Input }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        height: '50%',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#FFF",
        borderRadius: 35,

    }
})
