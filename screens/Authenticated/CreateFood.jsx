import React, { useState } from 'react';
import {View, StyleSheet, Image, ScrollView, Pressable} from 'react-native';
import Text from '../../components/Text';
import safeArea from '../../components/safeArea';
import Input from '../../components/Input';
import Button from '../../components/Button';

const CreateFood = ({navigation}) => {
    const [name,setName] = useState('')
    const [wight,setWeight] = useState('')
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [receivingDate,setReceivingDate] = useState('')
    const [orderDate,setOrderDate] = useState('')

    const addProduct =() =>{
        // console.log('added')
        navigation.navigate('Summary')
    }
    return (
        <ScrollView>
            <View style={{flexDirection:'row',alignItems:'center',padding:30,paddingTop:40,marginBottom:20,marginTop:20,backgroundColor:'#fff'}}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/images/arrow.png')}/>
                </Pressable>
                <Text type="h3" style={{textAlign:'center',width:'100%'}}>Add Product</Text>
            </View>
            <View style={{padding:15}}>
            <View style={{padding:15,backgroundColor:'#fff',marginBottom:30}}>
                <Text type="overline">Product detail</Text>
                <Text style={{marginBottom:15,color:'#868889'}} type="subtitle">Fill out the information</Text>

                <Input placeholder={'Product name'} handler={setName}/>
                <Input placeholder={'kg'} handler={setWeight}/>
                <Input placeholder={'Price'} handler={setPrice}/>
                <Input placeholder={'Category'} handler={setCategory}/>
                <Input placeholder={'Receiving Date'} handler={setReceivingDate}/>
                <Input placeholder={'Order Date'} handler={setOrderDate}/>
            </View>

            <Button onPress={addProduct}>Add product</Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default CreateFood;
