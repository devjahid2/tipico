import React, { useState } from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Text from '../components/Text';
import { SafeAreaView } from 'react-native';
import safeArea from '../components/safeArea';
import Header from '../components/Header';
import { commonStyles } from '../assets/cummon/style';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialLogin from '../components/SocialLogin';

const SignUp = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const handelSignup = () => {

    }
    const goToLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={[safeArea.android,commonStyles.appBg,{flex:1}]}>
            <Header/>
            <View style={{height:250}}>
                <Text style={styles.title} type="h2">Signup to your account</Text>
                <Input placeholder={'Email or Phone Number'} handler={setEmail}/>
                <Input secureTextEntry={true} placeholder={'Password'} handler={setPassword}/>
                <Input secureTextEntry={true} placeholder={'Confirm Password'} handler={setConfirmPassword}/>
                
            </View>
            <View style={styles.mt}>
                <Button onPress={handelSignup}>Sign Up</Button>
            </View>
            <SocialLogin/>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',marginTop:30,gap:10}}>
                <Text centered style={styles.account} type="subtitle">Already Have An Account?</Text>
                <Pressable onPress={goToLogin}><Text style={styles.link} type="subtitle">Sign In</Text></Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title:{
        marginBottom:23
    },
    mt:{
        height:30,
        marginTop:30
    },
    link:{
        color:'#51B594'
    },
    account:{
        color:'#8c8b8c',
    }
})

export default SignUp;
