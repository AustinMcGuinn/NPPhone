import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import tw from '../../../tailwind';
import {storeData} from '../../context/AsyncStore';
import {useAuth} from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import LinearGradient from 'react-native-linear-gradient';
import HomeButton from '../../components/ui/HomeButton';

const SettingsScreen = () => {
  const authContext = useAuth();
  if (!authContext) {
    // Handle the case where the context is not inside an AuthProvider
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const {setAuth} = authContext;

  const signOut = async () => {
    setAuth(null);
    await storeData('jwt', null);
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={tw`flex-1`}>
      <View style={tw`flex-1 bg-black/20`}>
        <SafeAreaView style={tw`flex-1 m-7`}>
          {/* Time and date */}
          <View style={tw`flex-3 items-center justify-center`}>
            <Text style={tw`text-white text-6xl font-medium`}>Settings</Text>
          </View>
          {/*  */}
          <View style={tw`flex-9`}>
            <Button title="Logout" callFunc={() => signOut()} />
          </View>
          <HomeButton />
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
};

export default SettingsScreen;
