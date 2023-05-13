import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../Text';

const FoodWeight = ({item}) => {
    const {title,weight} = item;
    return (
        <View style={styles.flex}>
            <Text type="subtitle">{title}</Text>
            <Text style={{color:'#362F74'}} type="subtitle">{weight}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:15,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#6CC51D',
        borderRadius:6,
        marginBottom:10
    }
})

export default FoodWeight;
