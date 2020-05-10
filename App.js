import React, { useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { darkTheme, lightTheme } from './styles/themes';
import { ThemeContext } from './Context';
import { useColorScheme } from 'react-native-appearance';

import TabNavigation from './routes/bottomTab';
import Home from './pages/Habits';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  let colorScheme = useColorScheme();
  colorScheme = 'dark';

  const themeStatusBarStyle =
    colorScheme === 'light' ? 'dark-content' : 'light-content';
  const themeStyles = colorScheme === 'dark' ? darkTheme : lightTheme;

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
    )
  } else {
    return (
      <ThemeContext.Provider value={{theme: colorScheme, themeStyles}}>
        <StatusBar barStyle={themeStatusBarStyle} />
        <TabNavigation />
      </ThemeContext.Provider>
    );
  }
}
