import React, { useState } from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../../components/secure/Header';
import Search from '../../components/secure/Search';
import { foodWeight } from '../../assets/data/data';
import FoodWeight from '../../components/secure/FoodWeight';
import Text from '../../components/Text';

const Summary = ({navigation}) => {
    const [searchValue,setSearchValue] = useState('')
    const handelSearch =(e) =>{
        navigation.navigate('SearchError')
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <Header title={'Hi David!'} subtitle={'October 2022'}>
                <Search  title="Total in" subtitle="Total out" action={handelSearch} setSearchValue={setSearchValue}/>
            </Header>
            <View style={{padding:15}}>
            <View style={{padding:15,backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row',alignItems:'center', justifyContent:'flex-end',gap:10,marginBottom:15}}>
                    <Text type="overline">Download report</Text>
                    <Image source={require('../../assets/images/download.png')}/>
                </View>
                {
                    foodWeight.map((item) => {
                        return (<FoodWeight  item={item} key={item.id}/>)
                    })
                }
            </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Summary;
