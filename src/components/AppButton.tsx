import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Theme
import tw from '../../tailwind';

interface ButtonProps {
  icon: string;
  iconType:
    | 'Entypo'
    | 'Ionicons'
    | 'FontAwesome5'
    | 'FontAwesome6'
    | 'FontAwesome'
    | 'MaterialCommunityIcons';
  bgColor: string;
  navWhere?: any;
  disabled?: boolean;
}

const AppButton = (props: ButtonProps) => {
  const navigation = useNavigation();
  const {icon, iconType, bgColor, navWhere, disabled} = props;

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
            width: 150,
            height: 150,
            borderRadius: 75,
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
            width: 150,
            height: 150,
            borderRadius: 75,
            overflow: 'hidden',
          },
        ]}
      />
      {iconType === 'Ionicons' && (
        <Ionicons name={icon} size={35} style={{color: '#ffffff'}} />
      )}
      {iconType === 'Entypo' && (
        <Entypo name={icon} size={35} style={{color: '#ffffff'}} />
      )}
      {iconType === 'FontAwesome5' && (
        <FontAwesome5 name={icon} size={35} style={{color: '#ffffff'}} />
      )}
      {iconType === 'FontAwesome6' && (
        <FontAwesome6 name={icon} size={35} style={{color: '#ffffff'}} />
      )}
      {iconType === 'FontAwesome' && (
        <FontAwesome name={icon} size={35} style={{color: '#ffffff'}} />
      )}
      {iconType === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons
          name={icon}
          size={35}
          style={{color: '#ffffff'}}
        />
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
