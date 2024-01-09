import React from 'react';
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
import Entypo from 'react-native-vector-icons/Entypo';

type MessageProps = {id: number; name: string; text: string};

const Message = ({id, name, text}: MessageProps) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Message button pressed')}
      style={tw`flex-row rounded-lg justify-between my-2 bg-[#262631]`}>
      <View style={tw`flex-row`}>
        <View
          style={tw`rounded-r-full h-20 w-20 items-center justify-center bg-[rgba(24,24,36,255)]`}>
          <View
            style={tw`rounded-full h-16.5 w-16.5 items-center justify-center bg-[#262631]`}>
            <View
              style={tw`bg-[#d6d6d6] rounded-full h-12 w-12 items-center justify-center`}>
              <Entypo
                name={'mail'}
                size={25}
                color="#7c7c7c"
                style={tw`ml-0.5`}
              />
            </View>
          </View>
        </View>
        <View style={tw`my-auto ml-3`}>
          <Text style={tw`text-white font-medium text-lg`}>{name}</Text>
          <Text style={tw`text-[#808087] text-base -mt-1`}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MessageListScreen = () => {
  const messages = [
    {
      id: 1,
      name: 'Austin Bean',
      text: 'Fuck you',
    },
    {
      id: 2,
      name: 'Carter Hayes',
      text: 'Here is some meta',
    },
  ];

  return (
    <View style={tw`flex-1  bg-[rgba(24,24,36,255)]`}>
      <SafeAreaView style={tw`flex-1 m-7`}>
        <View style={tw`mt-5 flex-row justify-between`}>
          <Text style={tw`text-white text-2xl font-medium`}>Messages</Text>
          <TouchableOpacity
            onPress={() => console.log('New message button pressed')}
            style={tw`bg-[#4dc3a5] p-2 rounded-lg items-center justify-center h-10 w-10`}>
            <FontAwesome6
              name={'message'}
              size={20}
              color="#266152"
              style={tw`ml-0.5`}
              solid
            />
          </TouchableOpacity>
        </View>
        <View style={tw`relative mt-5`}>
          <TextInput
            style={tw`border-4 border-[#262631] rounded-lg p-3 text-white text-xl`}
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
              <Message id={item.id} name={item.name} text={item.text} />
            )}
            style={tw`flex-1`}
          />
        </View>
        <HomeButton />
      </SafeAreaView>
    </View>
  );
};

export default MessageListScreen;
