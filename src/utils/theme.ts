import { ThemeType } from "./types";

const baseTheme = {
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
  },
  typography: {
    fontSize: {
      sm: 14,
      md: 16,
      lg: 20,
      xl: 28,
    },
    fontFamily: {
      regular: "Montserrat-Regular",
      bold: "Montserrat-Bold",
    },
  },
};

export const theme: { light: ThemeType; dark: ThemeType } = {
  light: {
    ...baseTheme,
    topBar: {
      background: "#2563EB",
      textColor: "#FFFFFF",
    },
    inProgress: {
      background: "#9FDDFF",
      textColor: "#8594B3",
    },
    colors: {
      background: "#FFFFFF",
      secondaryBackground: "#232B3D",
      surface: "#F3F4F6",
      accent: "#2563EB",
      text: {
        primary: "#1F2937",
        secondary: "#4B5563",
        ternary: "#F9FAFB",
      },
      status: {
        success: "#059669",
        error: "#DC2626",
      },
      border: "#E5E7EB",
      divider: "#2E364A",
    },
  },
  dark: {
    ...baseTheme,
    topBar: {
      background: "#1B2332",
      textColor: "#F7FAFC",
    },
    inProgress: {
      background: "#9FDDFF",
      textColor: "#1B2332",
    },
    colors: {
      background: "#1B2332",
      secondaryBackground: "#232B3D",
      surface: "#374151",
      accent: "#60A5FA",
      text: {
        primary: "#FFFFFF",
        secondary: "#B3C3E1",
        ternary: "#B3C3E1",
      },
      status: {
        success: "#34D399",
        error: "#F87171",
      },
      border: "#374151",
      divider: "#2E364A",
    },
  },
};
