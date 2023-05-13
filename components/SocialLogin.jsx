import React from 'react';
import {View, StyleSheet, Pressable,Image} from 'react-native';

const SocialLogin = () => {
    return (
        <View style={styles.wrap}>
            <Pressable style={styles.icon}>
                <Image source={require('../assets/images/google.png')}/>
            </Pressable>
            <Pressable style={styles.icon}>
                <Image source={require('../assets/images/facebook.png')}/>
            </Pressable>
            <Pressable style={styles.icon}>
                <Image source={require('../assets/images/twitter.png')}/>
            </Pressable>
            <Pressable style={styles.icon}>
                <Image source={require('../assets/images/apple.png')}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:30
    },
    icon:{
        padding:10,
        backgroundColor:'white',
        width:50,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:"#ddd",
        shadowOffset: { width: 300, height: 200 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 2,
        borderRadius:5
    }
})

export default SocialLogin;
