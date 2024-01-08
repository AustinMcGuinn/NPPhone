import React from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import tw from '../../../../tailwind';
import {authorize} from 'react-native-app-auth';
import {useAuth} from '../../../context/AuthContext';
import {storeData} from '../../../context/AsyncStore';
import LinearGradient from 'react-native-linear-gradient';

const AuthHome = () => {
  const authContext = useAuth();
  if (!authContext) {
    // Handle the case where the context is not inside an AuthProvider
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const {setAuth} = authContext;

  const config = {
    clientId: '1193909463812411453',
    clientSecret: 'Yj5NfTGrRs-TgpvMrkmrr5UopFFmKeUh',
    redirectUrl: 'org.reactjs.native.example.NPPhone://oauthredirect',
    scopes: ['email', 'identify'],
    serviceConfiguration: {
      authorizationEndpoint: 'https://discordapp.com/api/oauth2/authorize',
      tokenEndpoint: 'https://discordapp.com/api/oauth2/token',
      revocationEndpoint: 'https://discordapp.com/api/oauth2/token/revoke',
    },
  };

  const onLoginDiscord = async () => {
    try {
      const authResult = await authorize(config);

      await storeData('jwt', authResult.refreshToken);
      setAuth(authResult);
      console.log(authResult);
    } catch (error) {
      console.log(error);
    }
  };

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;

  return (
    <ImageBackground
      source={require('../../../assets/home-background.jpg')}
      resizeMode="cover"
      style={tw`flex-1`}>
      <View style={tw`flex-1 bg-black/20`}>
        <SafeAreaView style={tw`flex-1 m-7`}>
          {/* Time and date */}
          <View style={tw`flex-3 items-center justify-center`}>
            <Text style={tw`text-white text-6xl font-medium`}>04:20</Text>
            <Text style={tw`text-white`}>{currentDate}</Text>
          </View>
          {/* Login buttons */}

          <View style={tw`flex-9 items-center justify-end`}>
            <View style={tw`w-full mb-10`}>
              <LinearGradient
                colors={['#7289da', '#4c669f']}
                style={tw`rounded-xl`}>
                <TouchableOpacity
                  onPress={() => onLoginDiscord()}
                  style={tw`flex-row items-center`}>
                  <View style={tw`flex-1 w-full py-4 rounded-xl items-center`}>
                    <View style={tw`flex-row`}>
                      <Text style={tw`font-bold text-white my-auto`}>
                        Login with Discord
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default AuthHome;
