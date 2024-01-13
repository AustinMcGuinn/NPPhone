import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, Image} from 'react-native';
import tw from '../../../../tailwind';
import {useAuth} from '../../../context/AuthContext';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AuthHome = () => {
  const authContext = useAuth();
  if (!authContext) {
    // Handle the case where the context is not inside an AuthProvider
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const {loginWithDiscord} = authContext;

  return (
    <View style={tw`flex-1 bg-[rgba(24,24,36,255)]`}>
      <SafeAreaView style={tw`flex-1 mx-4 my-7`}>
        {/* Time and date */}
        <View style={tw`flex-9 items-center justify-center`}>
          <Image
            source={require('../../../assets/nopixel-logo.png')}
            resizeMode="contain"
            style={tw`h-30`}
          />
        </View>
        {/* Login buttons */}

        <View style={tw`flex-3 items-center justify-end`}>
          <View style={tw`w-full mb-10`}>
            <TouchableOpacity
              onPress={loginWithDiscord}
              style={tw`flex-row rounded-lg justify-between my-2 bg-[#262631]`}>
              <View style={tw`flex-row`}>
                <View
                  style={tw`rounded-r-full h-20 w-20 items-center justify-center bg-[rgba(24,24,36,255)]`}>
                  <View
                    style={tw`rounded-full h-16.5 w-16.5 items-center justify-center bg-[#262631]`}>
                    <LinearGradient
                      colors={['#00f7ba', '#00a3f5']}
                      style={tw`rounded-full h-12 w-12 items-center justify-center`}>
                      <Image
                        source={require('../../../assets/discord-white-icon.png')}
                        style={tw`w-8 h-8`}
                      />
                    </LinearGradient>
                  </View>
                </View>
                <View style={tw`my-auto ml-3`}>
                  <Text style={tw`text-white font-medium text-lg`}>
                    Discord Login
                  </Text>
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
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AuthHome;
