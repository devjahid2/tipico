import React, { useState } from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import Header from '../../components/secure/Header';
import Search from '../../components/secure/Search';
import Text from '../../components/Text';
import { foodWeight } from '../../assets/data/data';
import FoodWeight from './../../components/secure/FoodWeight';

const FoodDetails = ({route,navigation}) => {
    const { id } = route.params;
    const [searchValue,setSearchValue] = useState('')
    const handelSearch =(e) =>{
        navigation.navigate('SearchError')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header title={'Hi David!'} subtitle={'October 2022'}>
                <Search navigation={navigation} action={handelSearch} setSearchValue={setSearchValue}/>
            </Header>
            {/* <Text>{JSON.stringify(id)}</Text> */}
            <View style={{padding:20}}>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between', padding:10,backgroundColor:'#fff',marginBottom:20}}>
                <View style={{backgroundColor:'#ebffd7', borderRadius:100,width:60,height:60,alignItems:'center',justifyContent:'center',}}>
                    <Image source={require('../../assets/images/details-box.png')}/>
                </View>
                <View>
                    <Text type="title">Vegetables #90897 </Text>
                    <Text style={{color:'#868889'}} type="subtitle">Placed on October 19 2021</Text>
                    <Text type="subtitle">Items: <Text style={{fontWeight:'600'}} type="subtitle">12</Text></Text>
                </View>
                <View>
                    <Text type="subtitle">Items: <Text style={{fontWeight:'600'}} type="subtitle">$16.90</Text></Text>
                </View>
            </View>

            <View style={{backgroundColor:'#fff',marginBottom:20,padding:10}}>
                {
                    foodWeight.map((item) => {
                        return (<FoodWeight item={item} key={item.id}/>)
                    })
                }
            </View>

            <View  style={{backgroundColor:'#fff',marginBottom:20,padding:10}}>

            <View style={{flexDirection:'row', alignItems:'center',gap:10, padding:10,backgroundColor:'#fff',marginBottom:0}}>
                <View style={{backgroundColor:'#ebffd7', borderRadius:100,width:60,height:60,alignItems:'center',justifyContent:'center',}}>
                    <Image source={require('../../assets/images/box.png')}/>
                </View>
                <View style={styles.border}>
                    <Text type="title">Product Order Placed</Text>
                    <Text style={{color:'#868889'}} type="subtitle">Octobar 21 2021</Text>
                </View>
            </View>

            <View style={{flexDirection:'row', alignItems:'center',gap:10, padding:10,backgroundColor:'#fff',marginBottom:0}}>
                <View style={{backgroundColor:'#ebffd7', borderRadius:100,width:60,height:60,alignItems:'center',justifyContent:'center',}}>
                    <Image source={require('../../assets/images/check-green.png')}/>
                </View>
                <View style={styles.border}>
                    <Text type="title">Product Order Confirmed</Text>
                    <Text style={{color:'#868889'}} type="subtitle">Octobar 21 2021</Text>
                </View>
            </View>

            <View style={{flexDirection:'row', alignItems:'center',gap:10, padding:10,backgroundColor:'#fff',marginBottom:0}}>
                <View style={{backgroundColor:'#ebffd7', borderRadius:100,width:60,height:60,alignItems:'center',justifyContent:'center',}}>
                    <Image source={require('../../assets/images/map.png')}/>
                </View>
                <View style={styles.border}>
                    <Text type="title">Product Shipped</Text>
                    <Text style={{color:'#868889'}} type="subtitle">Octobar 21 2021</Text>
                </View>
            </View>

            </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    border:{
        borderBottomColor:'#EBEBEB',
        borderBottomWidth:1,
        borderStyle:'solid',
        paddingBottom:10,
        width:'75%',
    }
})

export default FoodDetails;
