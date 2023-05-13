import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/images/logo_dark.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height:230,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Header;
