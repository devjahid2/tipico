import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Text from '../../components/Text';
import Header from './../../components/secure/Header';
import Search from '../../components/secure/Search';
import { fruits } from '../../assets/data/data';
import Fruits from '../../components/secure/Fruits';

const Food = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header title={'Hi David!'} subtitle={'October 2022'}>
                <Search/>
            </Header>
            <View style={{marginTop:-7,padding:20}}>
            {
                fruits.map((item) => {
                    return (
                        <Fruits item={item} key={item.id}/>
                    )
                })
            }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Food;
