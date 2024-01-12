import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';
import tw from '../../../tailwind';
import AppButton from '../../components/AppButton';
import {HomeButtons} from '../../config/HomeButtons';

const HomeScreen = () => {
  const renderButtonRows = () => {
    const numberOfRows = Math.ceil(HomeButtons.length / 4);
    return Array.from({length: numberOfRows}).map((_, rowIndex) => {
      const numberOfItemsInRow =
        rowIndex < numberOfRows - 1 ? 4 : HomeButtons.length % 4 || 4;
      return (
        <View key={rowIndex} style={tw`flex-row justify-around mb-4`}>
          {HomeButtons.slice(rowIndex * 4, (rowIndex + 1) * 4).map(
            (button, index) => (
              <AppButton
                key={index}
                icon={button.icon}
                iconType={
                  button.iconType as 'Ionicons' | 'Entypo' | 'FontAwesome5'
                }
                bgColor={button.bgColor}
                navWhere={button.navWhere}
              />
            ),
          )}
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
