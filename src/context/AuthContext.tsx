import React, {useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the shape of the context value
interface AuthContextValue {
  auth: any | null;
  setAuth: React.Dispatch<React.SetStateAction<any | null>>;
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

  const value = {auth, setAuth};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
