import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import tw from '../../../tailwind';
import LinearGradient from 'react-native-linear-gradient';
import HomeButton from '../../components/ui/HomeButton';
import {useUserService} from '../../services/UserService';

// info type
type InfoType = {text: string; value: string};
// licence type
type LicenceType = {text: string; valid: boolean};

const InfoScreen = () => {
  const {getCharacterInfo} = useUserService();

  const [info, setInfo] = useState<InfoType[]>([]);
  const [licences, setLicences] = useState<LicenceType[]>([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await getCharacterInfo();
        console.log('data', data);
        setInfo(data.info || []); // Fallback to empty array if undefined
        setLicences(data.licences || []); // Fallback to empty array if undefined
      } catch (error) {
        console.error('Failed to fetch character info:', error);
      }
    };

    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LinearGradient
      colors={['#20293F', '#191a28', '#202b41']}
      style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1 mx-4 my-7`}>
        {/* Time and date */}
        <Text style={tw`text-white text-3xl font-medium mt-5`}>Details</Text>
        {/*  */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-white text-2xl font-medium mb-2`}>Info</Text>
          {info.map((item, index) => (
            <View
              key={index}
              style={tw`flex-row justify-between bg-black/20 px-2 py-2 rounded-md mb-2`}>
              <Text style={tw`text-white text-xl my-auto`}>{item.text}</Text>
              <View style={tw`bg-black/20 px-2 py-0.5 rounded-md`}>
                <Text style={tw`text-white text-lg`}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={tw`mt-6`}>
          <Text style={tw`text-white text-2xl font-medium mb-2`}>Licences</Text>
          {licences.map((item, index) => (
            <View
              key={index}
              style={tw`flex-row justify-between bg-black/20 px-2 py-2 rounded-md mb-2`}>
              <Text style={tw`text-white text-xl my-auto`}>{item.text}</Text>
              {item.valid ? (
                <View style={tw`bg-green-600 px-2 py-0.5 rounded-md`}>
                  <Text style={tw`text-white text-xl`}>Valid</Text>
                </View>
              ) : (
                <View style={tw`bg-red-600 px-2 py-0.5 rounded-md`}>
                  <Text style={tw`text-white text-lg`}>Invalid</Text>
                </View>
              )}
            </View>
          ))}
        </View>
        <HomeButton />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default InfoScreen;
