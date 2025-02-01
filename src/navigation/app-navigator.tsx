import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavBar } from "../components/NavBar/nav-bar.component";
import { TopBar } from "../components/TopBar/top-bar.component";
import { View } from "react-native";

export type RootStackParamList = {
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator();

const ScreenWrapper = () => (
  <View style={{ flex: 1 }}>
    <TopBar />
    <NavBar />
  </View>
);

const AppNavigator = () => {
  console.log("Inside AppNavigator");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={ScreenWrapper}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
