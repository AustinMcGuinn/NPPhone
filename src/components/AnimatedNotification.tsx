import React, {useEffect, useRef, useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import tw from '../../tailwind';
import Entypo from 'react-native-vector-icons/Entypo';

// types
interface AnimatedNotificationProps {
  header: string;
  description: string;
  type?: 'info' | 'success' | 'error' | 'message';
  onHide?: () => void;
}

const AnimatedNotification = ({
  header,
  description,
  onHide,
}: AnimatedNotificationProps) => {
  const translateY = useRef(new Animated.Value(-150)).current;
  const [isVisible, setIsVisible] = useState(true);
  const [hideAnimationCompleted, setHideAnimationCompleted] = useState(false);

  // Animate in
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Set a timer to start the hide animation
    const timer = setTimeout(() => setIsVisible(false), 5000);

    return () => clearTimeout(timer);
  }, [translateY]);

  // Animate out
  useEffect(() => {
    if (!isVisible) {
      Animated.timing(translateY, {
        toValue: -150,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setHideAnimationCompleted(true));
    }
  }, [isVisible, translateY]);

  // Call onHide callback after hide animation is completed
  useEffect(() => {
    if (hideAnimationCompleted && onHide) {
      onHide();
    }
  }, [hideAnimationCompleted, onHide]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <Animated.View
      style={[
        tw`absolute top-15 left-0 right-0 z-1000`,
        {transform: [{translateY}]},
      ]}>
      <View style={tw`w-full items-center justify-center`}>
        <TouchableOpacity
          onPress={handleDismiss}
          style={tw`flex-row bg-teal-500 w-90 border-4 border-teal-400 rounded-lg px-3 py-2`}>
          <View style={tw`h-full `}>
            <Entypo
              name={'info'}
              size={35}
              style={[tw`my-auto mr-3 text-teal-200`]}
            />
          </View>
          <View>
            <Text style={tw`font-bold text-xl text-white`}>{header}</Text>
            <Text style={tw`text-white`}>{description}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default AnimatedNotification;
