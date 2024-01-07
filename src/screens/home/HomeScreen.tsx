import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import tw from '../../../tailwind';
import AppButton from '../../components/AppButton';

const HomeScreen = () => {
  const buttons = [
    {icon: 'info', bgColor: 'bg-blue-500', navWhere: 'Home'},
    {icon: 'direction', bgColor: 'bg-pink-500', navWhere: 'Home'},
    {icon: 'mail', bgColor: 'bg-cyan-400', navWhere: 'Home'},
    {icon: 'briefcase', bgColor: 'bg-yellow-200', navWhere: 'Home'},
    {icon: 'twitter', bgColor: 'bg-red-400', navWhere: 'Home'},
    {icon: 'checkmark-sharp', bgColor: 'bg-white', navWhere: 'Home'},
    {icon: 'checkmark-sharp', bgColor: 'bg-white', navWhere: 'Home'},
    {icon: 'checkmark-sharp', bgColor: 'bg-white', navWhere: 'Home'},
    {icon: 'checkmark-sharp', bgColor: 'bg-white', navWhere: 'Home'},
    {icon: 'checkmark-sharp', bgColor: 'bg-white', navWhere: 'Home'},
    {icon: 'checkmark-sharp', bgColor: 'bg-white', navWhere: 'Home'},
    {icon: 'checkmark-sharp', bgColor: 'bg-white', navWhere: 'Home'},
    {icon: 'checkmark-sharp', bgColor: 'bg-white', navWhere: 'Home'},
    {icon: 'checkmark-sharp', bgColor: 'bg-white', navWhere: 'Home'},
  ];

  const renderButtonRows = () => {
    const numberOfRows = Math.ceil(buttons.length / 4);
    return Array.from({length: numberOfRows}).map((_, rowIndex) => (
      <View key={rowIndex} style={tw`flex-row justify-between gap-x-2 mb-4`}>
        {buttons
          .slice(rowIndex * 4, (rowIndex + 1) * 4)
          .map((button, index) => (
            <AppButton
              key={index}
              icon={button.icon}
              bgColor={button.bgColor}
              navWhere={button.navWhere}
            />
          ))}
      </View>
    ));
  };

  return (
    <ImageBackground
      source={require('../../assets/home-background.jpg')}
      resizeMode="cover"
      style={tw`flex-1`}>
      <View style={tw`flex-1 bg-black/20`}>
        <SafeAreaView style={tw`flex-1 m-7`}>
          {/* Time and date */}
          <View style={tw`flex-3 items-center justify-center`}>
            <Text style={tw`text-white text-6xl font-medium`}>19:06</Text>
            <Text style={tw`text-white`}>1/5/2024</Text>
          </View>
          {/* App buttons */}
          <View style={tw`flex-7`}>{renderButtonRows()}</View>
          {/* App bar */}
          <View style={tw`flex-2`}>
            <View
              style={tw`mt-auto flex-row h-20 items-center justify-center bg-black/50 rounded-3xl`}>
              <Text style={tw`text-white`}>App bar</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
