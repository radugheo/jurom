import { useColorScheme } from "react-native";
import { theme } from "../utils/theme";

export const useTheme = () => {
  const colorScheme = useColorScheme();
  console.log(`Current color scheme: ${colorScheme}`);
  const isDark = colorScheme === "dark";

  return {
    theme: isDark ? theme.dark : theme.light,
    isDark,
  };
};
