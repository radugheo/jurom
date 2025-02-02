import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavBar } from "../components/NavBar/nav-bar.component";
import { TopBar } from "../components/TopBar/top-bar.component";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTheme } from "../hooks/use-theme";

export type RootStackParamList = {
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator();

const ScreenWrapper = () => {
  const theme = useTheme();

  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 100,
          backgroundColor: theme.theme.topBar.background,
          zIndex: -1,
        }}
      />
      <StatusBar translucent={true} backgroundColor="transparent" />
      <SafeAreaProvider>
        <TopBar />
        <NavBar />
      </SafeAreaProvider>
    </>
  );
};
export const AppNavigator = () => {
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
