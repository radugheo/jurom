import { StyleSheet } from "react-native";
import { theme } from "../../utils/theme";

export const styles = (isDark: boolean) => {
    const colors = isDark ? theme.colors.dark : theme.colors.light;
    return StyleSheet.create({
        container: {
            height: 50,
            marginTop: 50,
            paddingHorizontal: 20,
            backgroundColor: colors.background,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        innerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12
        },
        title: {
            fontWeight: '600',
            fontSize: 18,
            color: colors.text.primary
        }
    });
};