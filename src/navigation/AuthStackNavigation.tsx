import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '../context/AuthContext';

// Screens
import AuthHome from '../screens/auth/home/AuthHome';
import CharacterSelectScreen from '../screens/auth/character/CharacterScreen';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  const authContext = useAuth();

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const {auth} = authContext;

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      {auth === null ? (
        <AuthStack.Screen name="AuthHome" component={AuthHome} />
      ) : (
        <AuthStack.Screen
          name="CharacterSelect"
          component={CharacterSelectScreen}
        />
      )}
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
