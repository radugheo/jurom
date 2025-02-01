import { StyleSheet } from "react-native";
import { ThemeType } from "../utils/types";

export const createStyles = (theme: ThemeType) => {
  console.log("Styles being recreated");
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#EBF5FF",
      margin: 16,
      padding: 12,
      borderRadius: 8,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      fontSize: 16,
      color: theme.colors.text.primary,
    },
    recentSection: {
      paddingHorizontal: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 16,
      color: theme.colors.text.primary,
    },
    fileItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#E5E7EB",
    },
    fileNumber: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 4,
      color: theme.colors.text.primary,
    },
    courthouse: {
      fontSize: 14,
      color: theme.colors.text.secondary,
    },
    statusBadge: {
      backgroundColor: "#DCFCE7",
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 4,
    },
    statusText: {
      color: "#166534",
      fontSize: 14,
    },
  });
};
