import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import InfoScreen from '../screens/info/InfoScreen';
import MessageListScreen from '../screens/messages/MessageListScreen';
import ContactsListScreen from '../screens/contacts/ContactsListScreen';
import MessageScreen from '../screens/messages/MessageScreen';

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
      <MainStack.Screen name="MessageList" component={MessageListScreen} />
      <MainStack.Screen name="MessageConversation" component={MessageScreen} />
      <MainStack.Screen name="ContactsList" component={ContactsListScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;
