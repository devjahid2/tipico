import React from 'react';
import {View, StyleSheet} from 'react-native';
import Profile from '../../screens/Authenticated/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProfileStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Profile">
          <Stack.Screen name="Summary" component={Profile} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default ProfileStack;
