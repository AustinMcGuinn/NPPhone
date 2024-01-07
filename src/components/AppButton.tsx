import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

// Theme
import tw from '../../tailwind';

interface ButtonProps {
  icon: string;
  bgColor: string;
  navWhere?: any;
  disabled?: boolean;
}

const AppButton = (props: ButtonProps) => {
  const navigation = useNavigation();
  const {icon, bgColor, navWhere, disabled} = props;

  return (
    <TouchableOpacity
      style={tw`flex-row items-center justify-center w-17 h-17 rounded-2xl ${bgColor} overflow-hidden`}
      disabled={disabled}
      onPress={() => {
        if (navWhere !== undefined && !disabled) {
          // @ts-ignore
          navigation.navigate(navWhere);
        }
      }}>
      <View
        style={[
          tw`bg-black/10`,
          {
            position: 'absolute',
            top: 10,
            left: -7,
            width: 150, // adjust size as needed
            height: 150, // adjust size as needed
            borderRadius: 75, // half of width/height to make it a circle
            overflow: 'hidden',
          },
        ]}
      />
      <View
        style={[
          tw`bg-black/10`,
          {
            position: 'absolute',
            top: 30,
            left: 10,
            width: 150, // adjust size as needed
            height: 150, // adjust size as needed
            borderRadius: 75, // half of width/height to make it a circle
            overflow: 'hidden',
          },
        ]}
      />
      <Entypo name={icon} size={30} style={{color: '#ffffff'}} />
    </TouchableOpacity>
  );
};

export default AppButton;
