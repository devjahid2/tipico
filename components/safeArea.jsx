import {StyleSheet,Platform,StatusBar} from 'react-native';
export default StyleSheet.create({
    android:{
        paddingTop:Platform.OS === 'android'?StatusBar.currentHeight:30,
        padding:20
    }
});