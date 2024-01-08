import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import AuthHome from '../screens/auth/home/AuthHome';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <AuthStack.Screen name="AuthHome" component={AuthHome} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
