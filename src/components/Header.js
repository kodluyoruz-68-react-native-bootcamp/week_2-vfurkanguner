import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

//Const
const imageSource = require('../assets/checklist.png')
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height


const Header = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="cover" source={imageSource} style={styles.image} />
            <View style={styles.textContainer} >
                <Text style={styles.text}>Your Todos</Text>
                <Text style={styles.text}> 2</Text>
            </View>
        </View>
    )
}

export { Header }

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT * .38,
        alignItems: 'center',
        backgroundColor: "#F50057",
        padding: 10
    },
    image: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.3,
        borderRadius: 34,
    },
    textContainer: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 24,
        color: '#FFF'
    }
})
