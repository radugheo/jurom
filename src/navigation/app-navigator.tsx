import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavBar } from "../components/NavBar/nav-bar.component";

export type RootStackParamList = {
  MainTabs: undefined;  
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  console.log("Inside AppNavigator");
  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={NavBar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
 );
};

export default AppNavigator;
