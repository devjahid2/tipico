import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from '../../screens/Authenticated/Home';
import Food from '../../screens/Authenticated/Food';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Food" component={Food}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default HomeStack;
