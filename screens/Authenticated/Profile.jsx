import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../../components/secure/Header';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Profile = () => {
    const [readOnly,setReadOnly] = useState(true);
    const handelReadOnly = () => {
        alert('Profile Edit Mode Enable')
        setReadOnly(false);
    }
    const handelUpdate = () => {
        alert('Profile Updated')
        setReadOnly(true);
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header paddingBottom={120} hideName={true} title={'Hi David!'} subtitle={'October 2022'}/>

            <View style={{padding:20,position:'relative'}}>
            <View style={[styles.profilePic,{alignItems:'center',justifyContent:'center',width:'100%'}]}>
                <View style={styles.shadow}>
                    <Image style={styles.profile} source={require('../../assets/images/man.jpg')}/>
                </View>
                <Text centered type="h2" style={{}}>David Rob</Text>
                <Text style={{color:'#868889'}} type="overline">Creative graphic design</Text>
            </View>
            </View>
            <View style={{margin:15,padding:15,paddingBottom:0}}>
                <Input readOnly={readOnly} defaultValue={'nvt.isst.nute@gmail.com'} placeholder={'Email'}/>
                <Input readOnly={readOnly} defaultValue={'202-555-0137'} placeholder={'card'}/>
                <Input readOnly={readOnly} defaultValue={'South of Canada'} placeholder={'Country'}/>
                <Input readOnly={readOnly} defaultValue={'support.google.com'} placeholder={'Gmail'}/>
                <Input readOnly={readOnly} defaultValue={'South of Canada'} placeholder={'Country'}/>
                {
                    readOnly ? <Button onPress={handelReadOnly}>Edit now</Button> :<Button onPress={handelUpdate}>Update</Button> 
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profilePic:{
        backgroundColor:'#fff',
        padding:20,
        marginTop:-60
    },
    profile:{
        width:100,
        height:100,
        borderWidth:7,
        borderColor:'#fff',
        borderRadius:100,
    },
    shadow:{
        marginTop:-70,
        borderRadius:100,
        width:100,
        height:100,
        shadowColor: "#000",
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 7,
    marginBottom:15
    }
})

export default Profile;
