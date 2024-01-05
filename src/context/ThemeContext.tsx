import React, {useCallback, useContext, useMemo, useState} from 'react';
import {
  DarkTheme,
  ExtendedTheme,
  LightTheme,
  getSimpleTheme,
} from '../shared/theme/theme';

import {NavigationContainer} from '@react-navigation/native';

export type Theme = ExtendedTheme;

const lightTheme: Theme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
  },
};

const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

export type ThemeType = 'dark' | 'light';

export interface ThemeContextValue {
  theme: Theme;
  themeType: ThemeType;
  isDarkTheme: boolean;
  toggleThemeType: () => void;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: lightTheme,
  themeType: 'light',
  isDarkTheme: false,
  setThemeType: () => {},
  toggleThemeType: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  const [themeType, setThemeType] = useState<ThemeType>('light'); // initialize themeType as 'light'

  const toggleThemeType = useCallback(() => {
    setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const isDarkTheme = false;

  const theme = useMemo(
    () => (isDarkTheme ? darkTheme : lightTheme),
    [isDarkTheme],
  );

  return (
    <NavigationContainer theme={getSimpleTheme(lightTheme)}>
      <ThemeContext.Provider
        value={{
          theme,
          themeType,
          isDarkTheme,
          setThemeType,
          toggleThemeType,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
