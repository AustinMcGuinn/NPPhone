import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

// Theme
import tw from '../../tailwind';

interface ButtonProps {
  icon?: string;
  bgColor?: string;
  navWhere?: any;
  disabled?: boolean;
}

const AppButton = (props: ButtonProps) => {
  const navigation = useNavigation();
  const {navWhere, disabled} = props;

  return (
    <TouchableOpacity
      style={tw`flex-row items-center`}
      disabled={disabled}
      onPress={() => {
        if (navWhere !== undefined && !disabled) {
          // @ts-ignore
          navigation.navigate(navWhere);
        }
      }}>
      <Icon
        name={'checkmark-sharp'}
        size={20}
        style={{color: '#ffffff', paddingRight: 7}}
      />
    </TouchableOpacity>
  );
};

export default AppButton;
