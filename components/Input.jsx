import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder,secureTextEntry,handler,readOnly,defaultValue}) => {
    return (
        <TextInput defaultValue={defaultValue} readOnly={readOnly} style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} onChangeText={(e) => handler(e)}/>
    );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#f9f9f9',
        borderRadius: 5,
        borderWidth:0,
        padding:10,
        color:'#11132B',
        marginBottom:20
    }
})

export default Input;
