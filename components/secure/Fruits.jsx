import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from '../Text';

const Fruits = ({item}) => {
    const {image,title,type,update} = item
    return (
        <View style={[styles.flex,styles.card,{marginTop:20}]}>
            
            <Image style={{backgroundColor:'#F8FFCC',borderRadius:100}} source={image}/>

            <View>
                <Text>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flex:{
        flexDirection:'row',
        gap:20,
        alignItems:'center'
    },
    card:{
        backgroundColor:'#fff',
        padding:10
    }
})

export default Fruits;
