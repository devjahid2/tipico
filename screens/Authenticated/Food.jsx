import React, { useState } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './../../components/secure/Header';
import Search from '../../components/secure/Search';
import { fruits } from '../../assets/data/data';
import Fruits from '../../components/secure/Fruits';

const Food = ({navigation}) => {
    const [searchValue,setSearchValue] = useState('')
    const handelSearch =(e) =>{
        navigation.navigate('SearchError')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header title={'Hi David!'} subtitle={'October 2022'}>
            <Search navigation={navigation} action={handelSearch} setSearchValue={setSearchValue}/>
            </Header>
            <View style={{marginTop:-7,padding:20}}>
            {
                fruits.map((item) => {
                    return (
                        <Fruits navigation={navigation} item={item} key={item.id}/>
                    )
                })
            }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Food;
