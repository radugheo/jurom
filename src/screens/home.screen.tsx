import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.text}>TEST</Text>
    </View>
  );
};

export default HomeScreen;

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    marginTop: 70,
    marginLeft: 40,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Montserrat-Bold",
  },
});