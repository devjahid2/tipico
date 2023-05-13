import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../Text";
import Button from "../Button";

const Plans = ({ item, navigation }) => {
  const { title, offer1, price, offer2, offer3 } = item;
  const handelNavigate = () => {
    navigation.navigate('Food')
  }
  return (
    <View style={styles.plan}>
      <View style={styles.flex}>
        <Text style={styles.bold} white type="overline">
          {title}
        </Text>
        <Text style={styles.bold} white type="overline">
          {price}$/month
        </Text>
      </View>
      {offer1 ? (
        <View style={[styles.flex, { justifyContent: "flex-start", gap: 15, alignItems:'center' }]}>
          <Image source={require("../../assets/images/check_mark.png")} />

          <Text style={styles.text} white type="subtitle">
            {offer1}
          </Text>
        </View>
      ) : (
        ""
      )}
      {offer2 ? (
        <View style={[styles.flex, { justifyContent: "flex-start", gap: 15, alignItems:'center' }]}>
          <Image source={require("../../assets/images/check_mark.png")} />
          <Text style={styles.text} white type="subtitle">
            {offer2}
          </Text>
        </View>
      ) : (
        ""
      )}
      {offer3 ? (
        <View style={[styles.flex, { justifyContent: "flex-start", gap: 15, alignItems:'center' }]}>
          <Image source={require("../../assets/images/check_mark.png")} />
          <Text style={styles.text} white type="subtitle">
            {offer3}
          </Text>
        </View>
      ) : (
        ""
      )}
      <Button onPress={handelNavigate} style={styles.subscribe}>Subscribe</Button>
    </View>
  );
};

const styles = StyleSheet.create({
    subscribe:{
        width:120,
        right:0,
        position:'absolute',
        bottom:-23
    },
  plan: {
    backgroundColor: "#3A3565",
    borderRadius: 6,
    marginBottom: 50,
    position:'relative',
    paddingBottom:25
  },
  text: {
    fontWeight: "400",
    textAlign:'left',
    paddingRight:10
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  bold:{
    fontWeight:'600'
  }
});

export default Plans;
