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
      backgroundColor: theme.colors.secondaryBackground,
      margin: 16,
      padding: 12,
      borderRadius: 8,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      fontSize: 16,
      color: theme.colors.text.ternary,
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
      borderBottomColor: theme.colors.divider,
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
      backgroundColor: theme.inProgress.background,
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 4,
    },
    statusText: {
      color: theme.inProgress.textColor,
      fontSize: 14,
    },
  });
};
