import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const TodoRender = ({ item, onDelete, onChange }) => {
    return (
        <TouchableOpacity style={styles.container} onLongPress={() => onChange()} onPress={() => onDelete()} >
            <View style={styles.todoContainer} >
                <View style={styles.box} />
                <Text style={styles.todoText} >{item}</Text>
            </View>
        </TouchableOpacity>
    )
}

export { TodoRender }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    todoContainer: {
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT / 12,
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
        backgroundColor: "#FFF",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 0 },

    },
    box: {
        margin: 10,
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#F50057",

    },
    todoText: {
        fontSize: 16,
    },
    completedContainer: {
        width: SCREEN_WIDTH * 0.9,
        height: SCREEN_HEIGHT / 12,
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
        backgroundColor: "#FFF",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 0 },
        opacity: 0.3

    },


})
