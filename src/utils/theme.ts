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
    colors: {
      background: "#FFFFFF",
      surface: "#F3F4F6",
      accent: "#2563EB",
      text: {
        primary: "#1F2937",
        secondary: "#4B5563",
      },
      status: {
        success: "#059669",
        error: "#DC2626",
      },
      border: "#E5E7EB",
    },
  },
  dark: {
    ...baseTheme,
    topBar: {
      background: "#0F172A",
      textColor: "#60A5FA",
    },
    colors: {
      background: "#1F2937",
      surface: "#374151",
      accent: "#60A5FA",
      text: {
        primary: "#F9FAFB",
        secondary: "#E5E7EB",
        // primary: "#1F2937",
        // secondary: "#4B5563",
      },
      status: {
        success: "#34D399",
        error: "#F87171",
      },
      border: "#374151",
    },
  },
};
