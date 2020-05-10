import React, { useContext } from 'react';
import { ThemeContext } from '../Context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Habits from '../pages/Habits';

const Tab = createBottomTabNavigator();

export default () => {
  const { theme, themeStyles } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Habits') {
              iconName = 'md-checkmark';
            } else if (route.name === 'Settings') {
              iconName = 'ios-cog';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: themeStyles.accentColor.color,
          inactiveTintColor: themeStyles.textColor.color,
          style: [{backgroundColor: '#000'}, { paddingTop: 10 }]
        }}
      >
          <Tab.Screen name="Habits" component={Habits} />
          <Tab.Screen name="Settings" component={Habits} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}