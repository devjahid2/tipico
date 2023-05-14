import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scan from '../../screens/Authenticated/Scan';
import CreateFood from '../../screens/Authenticated/CreateFood';

const ScanStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="Scan">
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Screen options={{headerShown:false}} name="CreateFood" component={CreateFood}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default ScanStack;
