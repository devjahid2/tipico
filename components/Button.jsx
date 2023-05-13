import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const Button = ({children,onPress,style,size,height}) => {
    return (
        <Pressable onPress={onPress} style={[style,{flex:1,justifyContent:'flex-end'}]}>
            <LinearGradient
            style={[styles.button,{height:height||50}]}
            start={{ x: 0.8, y: 0.9 }}
            colors={["#6CC51D","#AEDC81"]}
      
            >
                <Text style={[styles.text,{fontSize:size||15}]}>{children}</Text>
            </LinearGradient>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontWeight:'600',
        
    },
    button:{
        alignItems:'center',
        padding:10,
        borderRadius:5,
        justifyContent:'center',
        
    }
})

export default Button;
