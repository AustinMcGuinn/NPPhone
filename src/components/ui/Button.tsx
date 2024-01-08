import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Theme
import tw from '../../../tailwind';
import {useTheme} from '../../context/ThemeContext';

interface ButtonProps {
  title: string;
  callFunc?: () => void;
  navWhere?: any;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  discord?: boolean;
  outline?: boolean;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const {isDarkTheme} = useTheme();
  const navigation = useNavigation();
  const {
    title,
    callFunc,
    navWhere,
    disabled,
    primary,
    secondary,
    discord,
    outline,
    loading,
  } = props;

  const getBgColor = () => {
    if (disabled) {
      return 'bg-gray-300';
    }
    if (discord) {
      return 'bg-[#7289da]';
    }
    if (isDarkTheme) {
      return primary
        ? 'bg-primary-400'
        : secondary
        ? 'bg-secondary-400'
        : 'bg-transparent';
    }
    return primary
      ? 'bg-primary-400'
      : secondary
      ? 'bg-secondary-500'
      : 'bg-transparent';
  };

  const getOutline = () => {
    if (!outline) {
      return '';
    }
    return primary
      ? 'border border-primary-400'
      : secondary
      ? 'border border-secondary-400'
      : '';
  };

  const getTextColor = () => {
    if (outline) {
      return primary
        ? 'text-primary-400'
        : secondary
        ? 'text-secondary-400'
        : 'text-white';
    } else {
      return isDarkTheme ? 'text-black' : 'text-white';
    }
  };

  const buttonStyles = tw`flex-1 w-full py-4 rounded-xl items-center ${getBgColor()} ${getOutline()}`;
  const textStyles = tw`font-bold ${getTextColor()} my-auto`;

  return (
    <TouchableOpacity
      style={tw`flex-row items-center`}
      disabled={disabled}
      onPress={() => {
        if (navWhere !== undefined && !disabled) {
          // @ts-ignore
          navigation.navigate(navWhere);
        }
        if (callFunc !== undefined && !disabled) {
          callFunc();
        }
      }}>
      <View style={buttonStyles}>
        <View style={tw`flex-row`}>
          <Text style={textStyles}>{title}</Text>
          {loading && (
            <Text style={tw`ml-2`}>
              {' '}
              <ActivityIndicator size="small" />
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
