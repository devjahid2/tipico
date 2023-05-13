import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ActiveIcon = ({ name }) => {
  switch (name) {
    case "HomeStack":
      return (
        <Image
          style={styles.image}
          source={require("../assets/images/home-active.png")}
        />
      );
    case "Scan":
      return (
        <Image
          style={styles.image}
          source={require("../assets/images/scan-active.png")}
        />
      );
    case "Transfer":
      return (
        <Image
          style={styles.image}
          source={require("../assets/images/transfer-active.png")}
        />
      );
    case "Profile":
      return (
        <Image
          style={styles.image}
          source={require("../assets/images/profile-active.png")}
        />
      );
  }
};

const InActiveIcon = ({ name }) => {
  switch (name) {
    case "HomeStack":
      return (
        <Image
          style={styles.image}
          source={require("../assets/images/home-inactive.png")}
        />
      );
    case "Scan":
      return (
        <Image
          style={styles.image}
          source={require("../assets/images/scan-inactive.png")}
        />
      );
    case "Transfer":
      return (
        <Image
          style={styles.image}
          source={require("../assets/images/transfer-inactive.png")}
        />
      );
    case "Profile":
      return (
        <Image
          style={styles.image}
          source={require("../assets/images/profile-inactive.png")}
        />
      );
  }
};

const TabBarIcon = ({ focused, name }) => {
  return focused ? (
    <View style={styles.activeBorder}>
      <LinearGradient
        style={styles.active}
        start={{ x: 0.7, y: 0 }}
        colors={["#AEDC81", "#6CC51D"]}
      >
        <ActiveIcon name={name} />
      </LinearGradient>
    </View>
  ) : (
    <View style={styles.inActive}>
      <InActiveIcon name={name} />
    </View>
  );
};

const styles = StyleSheet.create({
  activeBorder: {},
  active: {
    // padding:10,
    width: 56,
    height: 56,
    marginTop: -30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "white",
    shadowColor: "rgba(108, 197, 29, 0.26)",
    shadowOffset: { width: 300, height: 200 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 2,
  },
  inActive: {},
  image: {
    width: 24,
    height: 24,
    // padding:5
  },
});

export default TabBarIcon;
