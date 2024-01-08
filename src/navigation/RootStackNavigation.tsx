import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Context
import {useAuth} from '../context/AuthContext';

// Screens
import AuthStackNavigation from './AuthStackNavigation';
import MainStackNavigation from './MainStackNavigation';

const RootStack = createNativeStackNavigator();

const RootStackNavigation = () => {
  const authContext = useAuth();

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const {auth} = authContext;

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      {auth === null ? (
        <RootStack.Screen name="Auth" component={AuthStackNavigation} />
      ) : (
        <RootStack.Screen name="Main" component={MainStackNavigation} />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
