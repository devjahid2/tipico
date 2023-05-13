import React from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import safeArea from '../../components/safeArea';
import { commonStyles } from '../../assets/cummon/style';
import Header from '../../components/secure/Header';
import Plans from '../../components/secure/Plans';
import { plans } from '../../assets/data/data';

const Home = ({navigation}) => {
    

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={[commonStyles.appBg,{flex:1}]}>
            <Header title={'Choose your Plan'}/>
            <View style={safeArea.android}>
                {
                    plans.map((item) => {
                        return <Plans key={item.id} navigation={navigation} item={item}/>
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Home;
