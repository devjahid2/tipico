import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import {View, StyleSheet} from 'react-native';
import { commonStyles } from '../assets/cummon/style';
import Input from '../components/Input';
import Text from '../components/Text';
import Button from '../components/Button';

const userInfo = [
    'Info 1','Info 2','Info 3','Info 4'
];
const handelInputInfo = () => {
    return 0
}

const OnBoarding = ({navigation}) => {
    const navigateToLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <ScrollView style={commonStyles.appBg} showsVerticalScrollIndicator={false}>
            <ImageBackground style={styles.imageBg} source={require('../assets/images/onBoardingHead.png')}>
                <View style={styles.logoWrap}>
                    <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
                </View>
            </ImageBackground>
            <View style={[commonStyles.containerStyle]}>
                <Text style={styles.title} type={'h2'}>User Information</Text>
                {
                    userInfo.map((info,index) => {
                        return <Input key={index} placeholder={info} handler={handelInputInfo} readOnly={true}/>
                    })
                }

                <Button onPress={navigateToLogin}>Continue</Button>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imageBg:{
        height:414,
    },
    logoWrap:{
        backgroundColor:'rgba(54, 47, 116, 0.67)',
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        // height:'100%',
        // width:133
    },
    title:{
        marginBottom:23,
    }
})

export default OnBoarding;
