import React, { useState } from 'react';
import {View, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import safeArea from '../components/safeArea';
import Header from '../components/Header';
import { commonStyles } from '../assets/cummon/style';
import Text from './../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialLogin from '../components/SocialLogin';

const Login = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');

    const handelLoginWithEmail = () =>{
        console.log(email,password)
    }
    const goToReg = () => {
        console.log('sign up')
        navigation.navigate('SignUp')
    }
    return (
        <SafeAreaView style={[safeArea.android,commonStyles.appBg,{flex:1}]}>
            <Header/>
            <View style={{height:190}}>
                <Text style={styles.title} type="h2">Login to your account</Text>
                <Input placeholder={'Email or Phone Number'} handler={setEmail}/>
                <Input secureTextEntry={true} placeholder={'Password'} handler={setPassword}/>
                <Text style={styles.forget} type="subtitle">Forget Password</Text>
            </View>
            <View style={styles.mt}>
                <Button onPress={handelLoginWithEmail}>Sign in</Button>
            </View>

            <SocialLogin/>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',marginTop:30,gap:10}}>
                <Text centered style={styles.account} type="subtitle">Don’t Have Account?</Text>
                <Pressable onPress={goToReg}><Text style={styles.link} type="subtitle">Sign Up</Text></Pressable>
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
    forget:{
        marginTop:-20,
        color:'#000',
        textAlign:'right'
    },
    account:{
        color:'#8c8b8c',
    },
    link:{
        color:'#51B594'
    }
})

export default Login;
