import { StyleSheet } from 'react-native';
import { ThemeType } from "../../utils/types";

export const createStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        height: 50,
        marginTop: 50,
        paddingHorizontal: 20,
        backgroundColor: theme.topBar.background,
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
        color: theme.topBar.textColor
    }
});