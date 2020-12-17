import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
//Components
import { Item, StyledButton, Input } from './'

const notes = [
    {
        id: 0,
        title: 'Go to shopping',
        inStock: true,
    }, {
        id: 1,
        title: 'Play footbal',
        inStock: true,
    },
]

const NoteList = () => {
    return (
        <View style={{ justifyContent: 'flex-end', flex: 1 }} >
            <FlatList testID="list" keyExtractor={(item, index) => item.id.toString()} data={notes} renderItem={renderItem} />
            <View style={styles.forms}>
                <Input onChange={(val) => setText(val)} />
                <StyledButton onAddTodo={onAddTodo} />
            </View>
        </View>

    )
};

export { NoteList }

const styles = StyleSheet.create({
    forms: {
        height: 106,
        backgroundColor: "#3F3D56",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    }
})
