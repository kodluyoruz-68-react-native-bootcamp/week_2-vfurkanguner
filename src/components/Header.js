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
            
        </View>
    )
}

export { Header }

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT * .33,
        alignItems: 'center',
        backgroundColor: "#F50057",
        padding: 10
    },
    image: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.3,
        borderRadius: 34,
    },

})
