import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import tw from '../../../tailwind';
import LinearGradient from 'react-native-linear-gradient';
import HomeButton from '../../components/ui/HomeButton';

const InfoScreen = () => {
  const info = [
    {
      text: 'Apartment',
      value: 'A420',
    },
    {
      text: 'State Id',
      value: '2303',
    },
    {
      text: 'Bank Account ID',
      value: '61904229',
    },
    {
      text: 'Phone Number',
      value: '(420) 162-2456',
    },
    {
      text: 'Bank Balance',
      value: '$4,133.00',
    },
  ];

  const licences = [
    {
      text: 'Drivers License',
      valid: true,
    },
    {
      text: 'Weapons License',
      valid: false,
    },
  ];

  return (
    <LinearGradient
      colors={['#20293F', '#191a28', '#202b41']}
      style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1 m-7`}>
        {/* Time and date */}
        <Text style={tw`text-white text-3xl font-medium mt-5`}>Details</Text>
        {/*  */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-white text-2xl font-medium mb-2`}>Info</Text>
          {info.map((item, index) => (
            <View
              key={index}
              style={tw`flex-row justify-between bg-black/20 px-2 py-2 rounded-md mb-2`}>
              <Text style={tw`text-white text-xl my-auto`}>{item.text}</Text>
              <View style={tw`bg-black/20 px-2 py-0.5 rounded-md`}>
                <Text style={tw`text-white text-lg`}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={tw`mt-6`}>
          <Text style={tw`text-white text-2xl font-medium mb-2`}>Info</Text>
          {licences.map((item, index) => (
            <View
              key={index}
              style={tw`flex-row justify-between bg-black/20 px-2 py-2 rounded-md mb-2`}>
              <Text style={tw`text-white text-xl my-auto`}>{item.text}</Text>
              {item.valid ? (
                <View style={tw`bg-green-600 px-2 py-0.5 rounded-md`}>
                  <Text style={tw`text-white text-xl`}>Valid</Text>
                </View>
              ) : (
                <View style={tw`bg-red-600 px-2 py-0.5 rounded-md`}>
                  <Text style={tw`text-white text-lg`}>Invalid</Text>
                </View>
              )}
            </View>
          ))}
        </View>
        <HomeButton />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default InfoScreen;
