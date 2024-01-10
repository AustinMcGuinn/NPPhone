import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import tw from '../../../tailwind';
import AppButton from '../../components/AppButton';

const HomeScreen = () => {
  const buttons = [
    {
      icon: 'info',
      iconType: 'Entypo',
      bgColor: 'bg-blue-500',
      navWhere: 'Info',
    },
    {
      icon: 'location-arrow',
      iconType: 'FontAwesome6',
      bgColor: 'bg-pink-500',
    },
    {
      icon: 'mail',
      iconType: 'Ionicons',
      bgColor: 'bg-cyan-400',
    },
    {
      icon: 'briefcase',
      iconType: 'Ionicons',
      bgColor: 'bg-yellow-200',
    },
    {
      icon: 'twitter',
      iconType: 'Entypo',
      bgColor: 'bg-red-400',
    },
    {
      icon: 'garage-variant',
      iconType: 'MaterialCommunityIcons',
      bgColor: 'bg-green-400',
    },
    {
      icon: 'folder-open',
      iconType: 'FontAwesome',
      bgColor: 'bg-yellow-400',
    },
    {
      icon: 'chart-column',
      iconType: 'FontAwesome6',
      bgColor: 'bg-teal-400',
    },
    {
      icon: 'group',
      iconType: 'FontAwesome',
      bgColor: 'bg-purple-400',
    },
    {
      icon: 'calendar-clear',
      iconType: 'Ionicons',
      bgColor: 'bg-amber-400',
    },
    {
      icon: 'logo-google',
      iconType: 'Ionicons',
      bgColor: 'bg-green-300',
    },
    {
      icon: 'bus-simple',
      iconType: 'FontAwesome6',
      bgColor: 'bg-orange-500',
    },
    {
      icon: 'calculator',
      iconType: 'FontAwesome6',
      bgColor: 'bg-blue-400',
    },
    {
      icon: 'cog',
      iconType: 'FontAwesome',
      bgColor: 'bg-gray-300',
      navWhere: 'Settings',
    },
  ];

  const renderButtonRows = () => {
    const numberOfRows = Math.ceil(buttons.length / 4);
    return Array.from({length: numberOfRows}).map((_, rowIndex) => {
      // Calculate the number of items in the current row
      const numberOfItemsInRow =
        rowIndex < numberOfRows - 1 ? 4 : buttons.length % 4 || 4;

      // Create a row with buttons and empty views as needed
      return (
        <View key={rowIndex} style={tw`flex-row justify-around mb-4`}>
          {buttons
            .slice(rowIndex * 4, (rowIndex + 1) * 4)
            .map((button, index) => (
              <AppButton
                key={index}
                icon={button.icon}
                iconType={
                  button.iconType as 'Ionicons' | 'Entypo' | 'FontAwesome5'
                }
                bgColor={button.bgColor}
                navWhere={button.navWhere}
              />
            ))}
          {Array.from({length: 4 - numberOfItemsInRow}).map((_, index) => (
            <View key={index} style={tw`w-17 h-17`} />
          ))}
        </View>
      );
    });
  };

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;

  return (
    <ImageBackground
      source={require('../../assets/home-background.jpg')}
      resizeMode="cover"
      style={tw`flex-1`}>
      <View style={tw`flex-1 bg-black/20`}>
        <SafeAreaView style={tw`flex-1 m-5`}>
          {/* Time and date */}
          <View style={tw`flex-3 items-center justify-center`}>
            <Text style={tw`text-white text-6xl font-medium`}>04:20</Text>
            <Text style={tw`text-white`}>{currentDate}</Text>
          </View>
          {/* App buttons */}
          <View style={tw`flex-7`}>{renderButtonRows()}</View>
          {/* App bar */}
          <View style={tw`flex-2`}>
            <View
              style={tw`mt-auto px-3 flex-row h-22 items-center justify-between gap-x-2 bg-black/50 rounded-3xl`}>
              <AppButton
                icon={'phone'}
                bgColor={'bg-green-400'}
                iconType="FontAwesome5"
              />
              <AppButton
                icon={'chatbox-ellipses'}
                bgColor={'bg-blue-400'}
                navWhere={'MessageList'}
                iconType="Ionicons"
              />
              <AppButton
                icon={'address-book'}
                bgColor={'bg-orange-400'}
                navWhere={'ContactsList'}
                iconType="FontAwesome"
              />
              <AppButton
                icon={'camera'}
                bgColor={'bg-pink-400'}
                iconType="Entypo"
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
