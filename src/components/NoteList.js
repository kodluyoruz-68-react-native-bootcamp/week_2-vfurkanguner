import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
//Components
import { Item } from './'
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
    const renderItem = ({ item }) => <Item note={item} />
    return (
        <FlatList testID="list" keyExtractor={(item, index) => item.id.toString()} data={notes} renderItem={renderItem} />
    )
};

export { NoteList }

const styles = StyleSheet.create({})
