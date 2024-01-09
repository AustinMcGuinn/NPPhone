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
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

type ContactProps = {id: number; name: string; number: string};

const Contact = ({id, name, number}: ContactProps) => {
  const getInitials = (nameString: string) => {
    const words = nameString.split(' ');
    const initials = words
      .slice(0, 2)
      .map(word => word[0])
      .join('');
    return initials.toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <TouchableOpacity
      onPress={() => console.log('Message button pressed')}
      style={tw`flex-row rounded-lg justify-between my-2 bg-[#262631]`}>
      <View style={tw`flex-row`}>
        <View
          style={tw`rounded-r-full h-20 w-20 items-center justify-center bg-[rgba(24,24,36,255)]`}>
          <View
            style={tw`rounded-full h-16.5 w-16.5 items-center justify-center bg-[#262631]`}>
            <LinearGradient
              colors={['#00f7ba', '#00a3f5']}
              style={tw`rounded-full h-12 w-12 items-center justify-center`}>
              <Text style={tw`text-white font-extrabold text-xl`}>
                {initials}
              </Text>
            </LinearGradient>
          </View>
        </View>
        <View style={tw`my-auto ml-3`}>
          <Text style={tw`text-white font-medium text-lg`}>{name}</Text>
          <Text style={tw`text-[#808087] text-base -mt-1`}>{number}</Text>
        </View>
      </View>
      <View style={tw`mr-2 items-center justify-center my-auto`}>
        <TouchableOpacity
          onPress={() => console.log('Message button pressed')}
          style={tw`bg-[#4dc3a5] p-2 rounded-lg items-center justify-center mb-1`}>
          <FontAwesome6
            name={'message'}
            size={15}
            color="#a6e1d2"
            style={tw`ml-0.5`}
            solid
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Message button pressed')}
          style={tw`bg-[#9b693e] p-2 rounded-lg items-center justify-center`}>
          <FontAwesome6
            name={'message'}
            size={15}
            color="#ceb49f"
            style={tw`ml-0.5`}
            solid
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const ContactsListScreen = () => {
  const contacts = [
    {
      id: 1,
      name: 'Austin Bean',
      number: '(420) 492-2823',
    },
    {
      id: 2,
      name: 'Carter Hayes',
      number: '(420) 435-7334',
    },
  ];

  return (
    <View style={tw`flex-1  bg-[rgba(24,24,36,255)]`}>
      <SafeAreaView style={tw`flex-1 m-7`}>
        <View style={tw`mt-5 flex-row justify-between`}>
          <Text style={tw`text-white text-2xl font-medium`}>Contacts</Text>
          <TouchableOpacity
            onPress={() => console.log('New contact button pressed')}
            style={tw`bg-[#4dc3a5] p-2 rounded-lg items-center justify-center h-10 w-10`}>
            <Ionicons
              name={'person-add'}
              size={23}
              color="#266152"
              style={[tw`ml-0.5`, {transform: [{rotateY: '180deg'}]}]}
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
            data={contacts}
            renderItem={({item}) => (
              <Contact id={item.id} name={item.name} number={item.number} />
            )}
            style={tw`flex-1`}
          />
        </View>
        <HomeButton />
      </SafeAreaView>
    </View>
  );
};

export default ContactsListScreen;
