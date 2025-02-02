import { Search } from "lucide-react-native";
import React from "react";
import { View, Text, TextInput } from "react-native";
import { createStyles } from "./search-file.styles";
import { useThemedStyles } from "../hooks/use-themed-styles";

export const SearchFileScreen: React.FC = () => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search size={20} />
        <TextInput
          style={styles.searchInput}
          placeholder="Caută dosar după număr..."
          placeholderTextColor={"#B3C3E1"}
        />
      </View>

      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Dosare recente</Text>

        {/* File Items */}
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.fileItem}>
            <View>
              <Text style={styles.fileNumber}>3299/299/2024</Text>
              <Text style={styles.courthouse}>Tribunalul București</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>În curs</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
