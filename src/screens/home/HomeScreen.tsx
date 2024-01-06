import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import tw from '../../../tailwind';
import AppButton from '../../components/AppButton';

const HomeScreen = () => {
  const buttons = [
    {title: 'Button 1'},
    {title: 'Button 2'},
    {title: 'Button 3'},
    {title: 'Button 4'},
    {title: 'Button 5'},
    {title: 'Button 6'},
    {title: 'Button 7'},
    {title: 'Button 8'},
    {title: 'Button 9'},
    {title: 'Button 10'},
    {title: 'Button 11'},
    {title: 'Button 12'},
    {title: 'Button 13'},
  ];

  const renderButtonRows = () => {
    const numberOfRows = Math.ceil(buttons.length / 4);
    return Array.from({length: numberOfRows}).map((_, rowIndex) => (
      <View key={rowIndex} style={tw`flex-row justify-between mb-4`}>
        {buttons
          .slice(rowIndex * 4, (rowIndex + 1) * 4)
          .map((button, index) => (
            <AppButton key={index} />
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
        <SafeAreaView style={tw`flex-1 m-10`}>
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
