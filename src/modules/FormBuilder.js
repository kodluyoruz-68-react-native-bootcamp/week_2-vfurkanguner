import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

//Components
import { StyledButton, Input } from '../components'

const FormBuilder = ({onChange}) => {
    const [input, setInput ] = useState('');
    console.log(onChange)
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                {/* onChange metodu düzeltilecek*/}
                <Input onChange={(text) => setInput(text)} /> 
                <StyledButton  />
            </View>
        </View>
    )
}

export default FormBuilder

const styles = StyleSheet.create({
    container: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#3F3D56"
    },
    secondContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    }
})
