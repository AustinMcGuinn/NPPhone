import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import tw from '../../../tailwind';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/home-background.jpg')}
      resizeMode="cover"
      style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1 m-10`}>
        {/* Time n shit */}
        <View style={tw`flex-3 items-center justify-center`}>
          <Text style={tw`text-white`}>Time n shit</Text>
        </View>
        {/* App buttons */}
        <View style={tw`flex-7 items-center justify-center bg-red-500`}>
          <Text style={tw`text-white`}>App buttons</Text>
        </View>
        {/* App bar */}
        <View style={tw`flex-2`}>
          <View
            style={tw`mt-auto flex-row h-20 items-center justify-center bg-black/50 rounded-3xl`}>
            <Text style={tw`text-white`}>App buttons</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
