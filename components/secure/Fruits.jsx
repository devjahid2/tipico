import React from 'react';
import {View, StyleSheet, Image,Pressable} from 'react-native';
import Text from '../Text';

const Fruits = ({item,navigation}) => {
    const {image,title,type,update} = item;
    const navigateFoodDetails = () => {
        navigation.navigate('FoodDetails',{
            id:item.id
        })
    }
    return (
        <Pressable onPress={navigateFoodDetails} style={[styles.flex,styles.card,{marginTop:20}]}>
            
            <View style={{backgroundColor:'#F8FFCC',borderRadius:100,width:60,height:60}}>
                <Image source={image}/>
            </View>

            <View>
                <Text type='subtitle' style={styles.color}>{title}</Text>
                <Text type="title" style={styles.color}>{type}</Text>
                <Text style={{color:'#868889'}} type="subtitle">Last Update: {update}</Text>
            </View>
        </Pressable>
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
    },
    color:{
        color:'#362F74'
    }
})

export default Fruits;
