import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Button, Input } from "./";
import { TodoRender } from './TodoRender';


const NoteList = () => {
    //states
    const [todo, setTodo] = useState("")
    const [todoList, settodoList] = useState([])


    const renderItem = ({ item }) => <TodoRender onDelete={onDelete} item={item} onChange={() => alert("Tamamlandı")} />

    const onAddTodo = () => {
        settodoList([...todoList, todo])
    }

    const onDelete = (key) => {
        // console.log("works")
        settodoList((prevTodo) => {
            console.log("prevtodo", prevTodo)
            return prevTodo.filter(todo => console.log("todo",todo))
        })
    }


    const flatList = useRef(null)

    return (
        <View style={styles.container}>
            <View style={styles.textContainer} >
                <Text style={styles.text}>Your Todos</Text>
                <Text style={styles.text}> {todoList.length} </Text>
            </View>
            <FlatList keyExtractor={(item, index) => index.toString()} onContentSizeChange={() => flatList.current.scrollToEnd()} ref={flatList} data={todoList} renderItem={renderItem} />
            <View style={styles.footer} >
                <Input onChangeText={(val) => setTodo((val))} />
                <Button onSend={onAddTodo} />
            </View>
        </View>
    )
}

export { NoteList }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#F50057"
    },
    footer: {
        alignItems: "center",
        height: "15%",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#3F3D56"
    },
    text: {
        fontSize: 24,
        color: '#FFF'
    }
})
