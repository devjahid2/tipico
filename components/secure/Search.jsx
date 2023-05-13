import React from 'react';
import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import Button from '../Button';
import Text from '../Text';
import { Image } from 'react-native';

const Search = ({placeholder}) => {
    return (
        <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-between',gap:10}}>
            <View style={{position:'relative',width:'50%'}}>
            <Image style={styles.image} source={require('../../assets/images/search.png')}/>
                <TextInput style={styles.search} placeholder={placeholder ? placeholder: 'Search..'}/>
            </View>
            <View style={[styles.flex,styles.btnWrap,{width:'50%',gap:10}]}>
                <Button height={40} size={10}>Add food</Button>
                <Pressable>
                    <Text type="subtitle">Create food</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    search:{
        backgroundColor:'#F4F5F9',
        padding:10,
        paddingLeft:35,
        borderRadius:5,
        width:'100%'
    },
    flex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    btnWrap:{
        backgroundColor:'#F4F5F9',
        padding:4,
        borderRadius:5,
    },
    image:{
        position:'absolute',
        left:10,
        zIndex:1,
        top:'30%'
    }
})

export default Search;
