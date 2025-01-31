import React from "react";
import { View, Text } from "react-native";
import { styles } from "./top-bar.styles";
import { BaseProps } from "../../utils/types";

export const TopBar: React.FC<BaseProps> = (props: BaseProps) => (
    <View style={styles(props.isDarkMode || false).container}>
      <View style={styles(props.isDarkMode || false).innerContainer}>
        {/* <Menu color="#4B5563" /> */}
        <Text style={styles(props.isDarkMode || false).title}>Jurom</Text>
      </View>
    </View>
  );