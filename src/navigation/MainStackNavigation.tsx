import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import InfoScreen from '../screens/info/InfoScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Settings" component={SettingsScreen} />
      <MainStack.Screen name="Info" component={InfoScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;
