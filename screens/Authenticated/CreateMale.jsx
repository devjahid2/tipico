import React, { useState } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/secure/Header';
import Search from '../../components/secure/Search';
import Text from '../../components/Text';

const CreateMale = ({navigation}) => {
    const [searchValue,setSearchValue] = useState('')
    const handelSearch =(e) =>{
        navigation.navigate('SearchError')
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <Header title={'Hi David!'} subtitle={'October 2022'}>
                <Search action={handelSearch} setSearchValue={setSearchValue}/>
            </Header>
            <View style={{padding:20}}>
                <View style={styles.card}>
                    <Text>Create meal </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card:{

    }
})

export default CreateMale;
