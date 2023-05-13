import React from 'react';
import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import Button from '../Button';
import Text from '../Text';
import { Image } from 'react-native';

const Search = ({placeholder,setSearchValue,action,navigation,title,subtitle}) => {
    const handelNavigate = () => {
        navigation.navigate('CreateFood')
    }
    const handelNavigateMale = () => {
        navigation.navigate('CreateMale')
    }
    return (
        <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-between',gap:10}}>
            <View style={{position:'relative',width:'50%'}}>
            <Image style={styles.image} source={require('../../assets/images/search.png')}/>
                {
                    setSearchValue ? <TextInput onBlur={action} onChangeText={ (e) => setSearchValue(e)} style={styles.search} placeholder={placeholder ? placeholder: 'Search..'}/>
                    : <TextInput  style={styles.search} placeholder={placeholder ? placeholder: 'Search..'}/>
                }
            </View>
            <View style={[styles.flex,styles.btnWrap,{width:'50%',gap:10}]}>
                <Button onPress={handelNavigate} height={40} size={10}>{title || 'Add food'}</Button>
                <Pressable onPress={handelNavigateMale}>
                    <Text type="subtitle">{subtitle||'Create food'}</Text>
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
