import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TopBar } from "../components/TopBar/top-bar.component";

export const SearchFileScreen: React.FC = () => {
  return (
    <View>
      <>
        <TopBar isDarkMode={true}></TopBar>

        <View style={{ flex: 1 }}>
          <Text style={styles.text}>TEST</Text>
        </View>
      </>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    marginTop: 50,
    marginLeft: 40,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Montserrat-Bold",
  },
});
