import React from "react";
import { View, Text } from "react-native";
import { createStyles } from "./top-bar.styles";
import { useThemedStyles } from "../../hooks/use-themed-styles";

export const TopBar: React.FC = () => {
  const styles = useThemedStyles(createStyles);
  
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Jurom</Text>
      </View>
    </View>
  );
};