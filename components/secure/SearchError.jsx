import React, { useState } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Header from './Header';
import Search from './Search';
import Text from '../Text';

const SearchError = ({navigation}) => {
    const [searchValue,setSearchValue] = useState('')
    const handelSearch =() =>{
        navigation.navigate('SearchError')
    }
    return (
        <View>
            <Header title={'Hi David!'} subtitle={'October 2022'}>
                <Search action={handelSearch} setSearchValue={setSearchValue}/>
            </Header>
            <View style={{padding:50}}>
            <View style={styles.error}>
                <Image style={{marginBottom:10}} source={require('../../assets/images/sad-emoji.png')}/>
                <Text style={{textAlign:'center',color:'#868889'}} type="overline">No items found according to your search!</Text>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    error:{
        backgroundColor:'#fff',
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default SearchError;
