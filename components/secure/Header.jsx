import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import safeArea from '../safeArea';
import Text from '../Text';

const Header = ({children,title,subtitle,hideName,paddingBottom}) => {
    return (
        <View style={[styles.header,safeArea.android,{paddingBottom:paddingBottom||30}]}>
            <View style={{alignItems:'center',paddingTop:20,}}>
                <Image style={{}} source={require('../../assets/images/logo_light.png')}/>
            </View>
            {
                hideName ? '' : 
                <View style={{flexDirection:'row', gap:15,marginTop:20,alignItems:'flex-start'}}>
                <Image width={100} source={require('../../assets/images/bars.png')}/>
                <View>
                    <Text style={{color:'#fff',marginTop:-7}} type="h3">{title}</Text>
                    {
                        subtitle ? <Text style={{color:'#fff'}} type="overline">{subtitle}</Text> : ''
                    }
                </View>
            </View>
            }
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#362F74',
        width:'100%',
    }
})

export default Header;
