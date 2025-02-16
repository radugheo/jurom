import { StyleSheet } from "react-native";
import { ThemeType } from "../utils/types";

const searchBoxStyles = (theme: ThemeType) => {
  return {
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
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.text.ternary,
    },
  };
};

const fileStyles = (theme: ThemeType) => {
  return {
    fileItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.divider,
    },
    fileNumber: {
      marginBottom: 4,
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.semiBold,
      color: theme.colors.text.primary,
    },
    courthouse: {
      fontSize: theme.typography.fontSize.sm,
      fontFamily: theme.typography.fontFamily.medium,
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
      fontSize: theme.typography.fontSize.sm,
      fontFamily: theme.typography.fontFamily.medium,
    },
  };
};

const recentSectionStyles = (theme: ThemeType) => {
  return {
    recentSection: {
      paddingHorizontal: 16,
    },
    sectionTitle: {
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.semiBold,
      marginBottom: 16,
      color: theme.colors.text.primary,
    },
    ...fileStyles(theme),
  };
};

export const createStyles = (theme: ThemeType) => {
  console.log("Styles being recreated");
  return StyleSheet.create<any>({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    ...searchBoxStyles(theme),
    ...recentSectionStyles(theme),
  });
};
