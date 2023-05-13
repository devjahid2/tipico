import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from '../../screens/Authenticated/Home';
import Food from '../../screens/Authenticated/Food';
import FoodDetails from '../../screens/Authenticated/FoodDetails';
import SearchError from '../../components/secure/SearchError';
import CreateFood from '../../screens/Authenticated/CreateFood';
import Summary from '../../screens/Authenticated/Summary';
import CreateMale from '../../screens/Authenticated/CreateMale';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Food" component={Food}/>
          <Stack.Screen name="FoodDetails" component={FoodDetails}/>
          <Stack.Screen name="SearchError" component={SearchError}/>
          <Stack.Screen name="CreateFood" component={CreateFood}/>
          <Stack.Screen name="CreateMale" component={CreateMale}/>
          <Stack.Screen name="Summary" component={Summary}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default HomeStack;
