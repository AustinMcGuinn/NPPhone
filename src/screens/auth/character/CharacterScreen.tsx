import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import tw from '../../../../tailwind';
import {useAuth} from '../../../context/AuthContext';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type CharacterProps = {id: number; name: string; number: string};

const Character = ({id, name, number}: CharacterProps) => {
  const authContext = useAuth();
  if (!authContext) {
    // Handle the case where the context is not inside an AuthProvider
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const {setCharacter} = authContext;

  const getInitials = (nameString: string) => {
    const words = nameString.split(' ');
    const initials = words
      .slice(0, 2)
      .map(word => word[0])
      .join('');
    return initials.toUpperCase();
  };

  const initials = getInitials(name);

  const handleCharacterSelect = () => {
    setCharacter({id, name, number});
  };

  return (
    <TouchableOpacity
      onPress={handleCharacterSelect}
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
          <Text style={tw`text-[#808087]`}>{number}</Text>
        </View>
      </View>
      <View style={tw`my-auto mr-2`}>
        <View
          style={tw`bg-[#4dc3a5] m-1 w-7 h-7 items-center justify-center rounded`}>
          <FontAwesome5
            name="chevron-right"
            size={20}
            color="#266152"
            style={tw`pl-0.7`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CharacterListFooter = () => {
  const authContext = useAuth();
  if (!authContext) {
    // Handle the case where the context is not inside an AuthProvider
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const {signOut} = authContext;

  return (
    <View style={tw`items-center mt-2`}>
      <TouchableOpacity
        onPress={signOut}
        style={tw`p-2 bg-[#4dc3a5] rounded-lg`}>
        <Text style={tw`text-[#266152] font-bold`}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const CharacterSelectScreen = () => {
  const characters = [
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
    <View style={tw`flex-1 bg-[rgba(24,24,36,255)]`}>
      <View style={tw`flex-1`}>
        <SafeAreaView style={tw`flex-1 m-5`}>
          {/* Time and date */}
          <View style={tw`flex-3 items-center justify-center`}>
            <Image
              source={require('../../../assets/nopixel-logo.png')}
              resizeMode="contain"
              style={tw`h-30`}
            />
            <Text style={tw`text-white text-2xl font-medium`}>
              Character Select
            </Text>
          </View>
          {/* Login buttons */}

          <View style={tw`flex-9`}>
            <View style={tw`w-full mb-10 flex-1`}>
              <FlatList
                data={characters}
                renderItem={({item}) => (
                  <Character
                    id={item.id}
                    name={item.name}
                    number={item.number}
                  />
                )}
                style={tw`flex-1`}
                ListFooterComponent={CharacterListFooter}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default CharacterSelectScreen;
