import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from '../../../tailwind';
import HomeButton from '../../components/ui/HomeButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useUserService} from '../../services/UserService';
import {useNavigation} from '@react-navigation/native';
import {formatDistanceToNow} from 'date-fns';
import {useNotification} from '../../context/NotificationContext';

type ConversationProps = {
  id: number;
  name: string;
  text: string;
  time: Date;
  sentByMe: boolean;
};

const Message = ({id, name, text, time, sentByMe}: ConversationProps) => {
  const getTimeAgo = (timestamp: Date) => {
    return formatDistanceToNow(new Date(timestamp), {addSuffix: true});
  };

  return (
    <View
      key={id}
      style={tw`flex-row rounded-lg justify-between px-3 py-3 my-1.5 ${
        sentByMe ? 'bg-[#3a3a45]' : 'bg-[#262631]'
      }`}>
      <View style={tw`my-auto ml-3`}>
        <View style={tw`flex-row justify-between w-full mb-1`}>
          <View>
            <Text style={tw`text-white font-medium text-lg`}>{name}</Text>
          </View>
          <View>
            <Text style={tw`text-[#939399] font-medium text-lg`}>
              {getTimeAgo(time)}
            </Text>
          </View>
        </View>
        <Text style={tw`text-[#939399] text-base -mt-1`}>{text}</Text>
      </View>
    </View>
  );
};

const MessageScreen = () => {
  const showNotification = useNotification();
  const now = Date.now();

  const messages = [
    {
      id: 4,
      name: 'Austin Bean',
      text: 'Fuck you',
      time: new Date(now - 1000 * 30),
      sentByMe: false,
    },
    {
      id: 3,
      name: 'Me',
      text: 'I cant make it today, I have a doctors appointment',
      time: new Date(now - 1000 * 60 * 5),
      sentByMe: true,
    },
    {
      id: 2,
      name: 'Austin Bean',
      text: 'Hey we have a court case today at 9pm, I have added it to the calendar',
      time: new Date(now - 1000 * 60 * 60),
      sentByMe: false,
    },
    {
      id: 1,
      name: 'Me',
      text: 'Hello',
      time: new Date(now - 1000 * 60 * 60 * 3),
      sentByMe: true,
    },
  ];

  const navigation = useNavigation();

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={tw`flex-1 bg-[rgba(24,24,36,255)]`}>
        <SafeAreaView style={tw`flex-1 mx-4 my-7`}>
          <View style={tw`mt-5 flex-row justify-between`}>
            <TouchableOpacity onPress={handleNavigateBack} style={tw`flex-row`}>
              <FontAwesome6
                name={'chevron-left'}
                size={20}
                color="#ffffff"
                style={tw`pb-1 my-auto mr-2`}
                solid
              />
              <Text style={tw`text-white text-3xl font-medium`}>
                Austin Bean
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                showNotification(
                  'Action unavaliable',
                  'You cant call someone, dumbass.',
                )
              }
              style={tw`bg-[#4dc3a5] p-2 rounded-lg items-center justify-center h-10 w-10`}>
              <FontAwesome6
                name={'phone'}
                size={20}
                color="#266152"
                style={tw`ml-0.5`}
                solid
              />
            </TouchableOpacity>
          </View>
          <View style={tw`relative mt-5`}>
            <TextInput
              style={tw`border-4 border-[#262631] rounded-lg p-3 text-black text-xl`}
              placeholder="Search"
              placeholderTextColor="#757575"
            />
            <TouchableOpacity
              style={tw`absolute right-3 top-3 p-2 bg-[#2b2b39] rounded-lg items-center justify-center`}
              onPress={() => console.log('Search button pressed')}>
              <FontAwesome5 name="search" size={20} color="#60606b" />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-1 mt-5`}>
            <FlatList
              data={messages}
              renderItem={({item}) => (
                <Message
                  id={item.id}
                  name={item.name}
                  text={item.text}
                  time={item.time}
                  sentByMe={item.sentByMe}
                />
              )}
              style={tw`flex-1 mb-2`}
              inverted
            />
          </View>
          <View style={tw`relative mb-5`}>
            <TextInput
              style={tw`bg-[#262631] rounded-lg pt-4 pb-5 px-4 text-black text-xl`}
              placeholder="Type your message"
              placeholderTextColor="#757575"
            />
            <TouchableOpacity
              style={tw`absolute right-3 top-3 h-10 w-10 bg-[#4dc3a5] rounded-lg items-center justify-center`}
              onPress={() => console.log('Search button pressed')}>
              <FontAwesome6 name="chevron-right" size={20} color="#266152" />
            </TouchableOpacity>
          </View>
          <HomeButton />
        </SafeAreaView>
      </View>
    </>
  );
};

export default MessageScreen;
