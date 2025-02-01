import { useMemo } from "react";
import { ThemeType } from "../utils/types";
import { useTheme } from "./use-theme";

export const useThemedStyles = <T>(createStyles: (theme: ThemeType) => T) => {
  const { theme } = useTheme();
  return useMemo(() => createStyles(theme), [theme, createStyles]);
};
