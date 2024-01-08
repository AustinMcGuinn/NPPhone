import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Theme
import tw from '../../../tailwind';

const HomeButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={tw`absolute bottom-0 flex-row items-center justify-center mx-20`}
      // @ts-ignore
      onPress={() => navigation.navigate('Home')}>
      <View style={tw`h-4 flex-1`}>
        <View style={tw`bg-white h-2 w-full rounded-full mt-auto`} />
      </View>
    </TouchableOpacity>
  );
};

export default HomeButton;
