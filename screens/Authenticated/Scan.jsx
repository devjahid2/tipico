import React, { useState } from 'react';
import {View, StyleSheet,TouchableOpacity} from 'react-native';
import Text from '../../components/Text';
import { Camera, CameraType } from 'expo-camera';
import Button from '../../components/Button';

const Scan = ({navigation}) => {
    const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  if (!permission) {
    // Camera permissions are still loading
    return <View>
        <Text>Tipico Need Camera Permission</Text>
    </View>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission}>Allow</Button>
      </View>
    );
  }
    return (
        <>
            <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',backgroundColor:'#fff',justifyContent:'center',padding:15,margin:15,marginBottom:0}}>
            <View style={{borderRightWidth:1,borderRightColor:'#D9D9D9',paddingRight:5}}>
                <Text style={styles.text} type="overline">Product detected</Text>
                <Text style={{color:'#868889'}} type="subtitle">Apple</Text>
            </View>
            <View style={{paddingLeft:5}}>
                <Text style={styles.text} type="overline">Product Category</Text>
                <Text style={{color:'#868889'}} type="subtitle">Fruits</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',backgroundColor:'#fff',justifyContent:'center',padding:10,margin:15}}>
            <View style={{borderRightWidth:1,borderRightColor:'#D9D9D9',paddingRight:5}}>
                <Text style={styles.text} type="overline">Available</Text>
                <Text style={{color:'#868889'}} type="subtitle">No</Text>
            </View>
            <View style={{paddingLeft:5,paddingTop:10}}>
                <Button onPress={() => navigation.navigate('CreateFood')} height={40} size={12}>Add Food</Button>
            </View>
          </View>
        </View>
      </Camera>
        </View>
      <View style={{paddingHorizontal:20,marginBottom:20}}>
        <Button onPress={requestPermission}>Scan Now</Button>
      </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom:40
      },
      camera: {
        // height:'90%',
        flex:.9
      },
      buttonContainer:{
        flexDirection:'column',
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-end'
      },
      text: {
        fontWeight: '600',
      },
})

export default Scan;
