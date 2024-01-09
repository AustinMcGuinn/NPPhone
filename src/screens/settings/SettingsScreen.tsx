import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import tw from '../../../tailwind';
import {useAuth} from '../../context/AuthContext';
import LinearGradient from 'react-native-linear-gradient';
import HomeButton from '../../components/ui/HomeButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SettingsScreen = () => {
  const authContext = useAuth();
  if (!authContext) {
    // Handle the case where the context is not inside an AuthProvider
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const {signOut} = authContext;

  const buttons = [
    {
      text: 'Appearance',
      onPress: () => console.log('Appearance'),
      icon: 'cog',
    },
    {
      text: 'Notifications',
      onPress: () => console.log('Notifications'),
      icon: 'bell',
    },
    {
      text: 'Sounds',
      onPress: () => console.log('Sounds'),
      icon: 'bell',
    },
    {
      text: 'Logout',
      onPress: () => signOut(),
      icon: 'sign-out-alt',
    },
  ];

  return (
    <LinearGradient
      colors={['#20293F', '#191a28', '#202b41']}
      style={tw`flex-1`}>
      <View style={tw`flex-1 bg-black/20`}>
        <SafeAreaView style={tw`flex-1 m-7`}>
          <Text style={tw`text-white text-2xl font-medium mt-5`}>Settings</Text>
          <View style={tw`mt-5`}>
            {buttons.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={item.onPress}
                style={tw`flex-row bg-gray-400/20 my-2 rounded-lg p-4 justify-between`}>
                <View style={tw`flex-row`}>
                  <View
                    style={tw`bg-[#00f8b9]/20 p-2 rounded-lg items-center justify-center h-10 w-10`}>
                    <FontAwesome5
                      name={item.icon}
                      size={20}
                      solid
                      color="#00f8b9"
                    />
                  </View>
                  <Text
                    style={tw`text-[#00f8b9] text-xl font-medium ml-3 my-auto`}>
                    {item.text}
                  </Text>
                </View>
                <View
                  style={tw`bg-[#00f8b9]/20 p-2 rounded-lg items-center justify-center h-10 w-10`}>
                  <FontAwesome5
                    name={'chevron-right'}
                    size={20}
                    color="#00f8b9"
                    style={tw`ml-0.75`}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <HomeButton />
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
};

export default SettingsScreen;
