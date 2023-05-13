import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchError from '../../components/secure/SearchError';
import Summary from '../../screens/Authenticated/Summary';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SummaryStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Summary">
          <Stack.Screen name="Summary" component={Summary} />
          <Stack.Screen name="SearchError" component={SearchError}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default SummaryStack;
