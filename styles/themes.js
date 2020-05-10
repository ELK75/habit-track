import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
    containerColor: {
        backgroundColor: '#fff',
    },
    textColor: {
        color: '#242C40',
    }
});

export const darkTheme = StyleSheet.create({
    containerColor: {
        backgroundColor: '#000',
    },
    textColor: {
        color: '#F7FFF7',
    },
    accentColor: {
        color: '#6CA6C1'
    }
});