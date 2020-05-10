import React, { useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native';
import globalStyle from '../styles/globalStyle';
import { ThemeContext } from '../Context';
import Header from '../components/Header';

export default function Home(props) {
    const { theme, themeStyles } = useContext(ThemeContext);

    return (
        <View>
            <SafeAreaView style={{ flex: 0, backgroundColor: themeStyles.accentColor.color }} />
            <SafeAreaView style={[globalStyle.container, themeStyles.containerColor]}>
                <Header />
                <Text style={themeStyles.textColor}>bruh</Text>
            </SafeAreaView>
        </View>
    )
};
