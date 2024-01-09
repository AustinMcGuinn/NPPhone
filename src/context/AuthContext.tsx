import React, {useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData} from './AsyncStore';
import {authorize} from 'react-native-app-auth';

// Define the shape of the context value
interface AuthContextValue {
  auth: any | null;
  setAuth: React.Dispatch<React.SetStateAction<any | null>>;
  character: any | null;
  setCharacter: React.Dispatch<React.SetStateAction<any | null>>;
  signOut: () => void;
  loginWithDiscord: () => void;
}

// Create context
const AuthContext = React.createContext<AuthContextValue | undefined>(
  undefined,
);

// Custom hook for using the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// Auth provider component
export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState<any | null>(null);
  const [character, setCharacter] = useState<any | null>(null);

  // Fetch auth from storage when component is mounted
  useEffect(() => {
    const fetchAuth = async () => {
      const storedAuth = await AsyncStorage.getItem('auth');
      if (storedAuth !== null) {
        setAuth(JSON.parse(storedAuth));
      }
    };

    fetchAuth();
  }, []);

  // Update auth in storage whenever it changes
  useEffect(() => {
    const storeAuth = async () => {
      await AsyncStorage.setItem('auth', JSON.stringify(auth));
    };

    storeAuth();
  }, [auth]);

  const signOut = async () => {
    setAuth(null);
    setCharacter(null);
    await storeData('jwt', null);
  };

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

  const loginWithDiscord = async () => {
    try {
      const authResult = await authorize(config);

      await storeData('jwt', authResult.refreshToken);
      setAuth(authResult);
      console.log(authResult);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    auth,
    setAuth,
    character,
    setCharacter,
    signOut,
    loginWithDiscord,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
