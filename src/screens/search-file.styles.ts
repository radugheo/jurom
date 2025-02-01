import { StyleSheet } from "react-native";
import { ThemeType } from "../utils/types";

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#EBF5FF",
      padding: 12,
      borderRadius: 8,
      marginBottom: 24,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      fontSize: 16,
      color: theme.colors.text.primary,
    },
    searchField: {
      color: theme.colors.text.primary,
    },
    recentSection: {
      gap: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 8,
      color: theme.colors.text.primary,
    },
    fileItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
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
