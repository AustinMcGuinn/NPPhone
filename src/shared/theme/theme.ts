import {DefaultTheme, Theme} from '@react-navigation/native';

export type ColorRange = {
  half: string;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
  seven: string;
  eight: string;
  nine: string;
};

export type ExtendedColors = {
  primary: ColorRange;
  secondary: ColorRange;
  tertiary: ColorRange;
  sand: ColorRange;
  quaternary: ColorRange;
  background: string;
  foreground: string;
  white: string;
  black: string;
  button: string;
  shadow: string;
  borderColor: string;
  borderColorDark: string;
  placeholder: string;
  danger: string;
  title: string;
  separator: string;
  highlight: string;
  blackOverlay: string;
  iconWhite: string;
  iconBlack: string;
  dynamicWhite: string;
  dynamicBlack: string;
  dynamicBackground: string;
  transparent: string;
  calpyse: string;
  card: string;
  text: string;
  notification: string;
  border: string;
  tabBar: string;
};

type DefaultThemeType = typeof DefaultTheme;

export type ExtendedTheme = Omit<DefaultThemeType, 'colors'> & {
  colors: ExtendedColors;
};

export const palette = {
  primary: '#475468',
  secondary: '#014f7c',
  background: 'rgb(255, 255, 255)',
  white: '#fff',
  black: '#101214',
  button: '#1c1e21',
  shadow: '#757575',
  text: '#30363b',
  borderColor: '#d0d7de',
  borderColorDark: '#333942',
  placeholder: '#a1a1a1',
  danger: 'rgb(208, 2, 27)',
  title: 'rgb(255, 255, 255)',
  separator: 'rgb(194, 194, 195)',
  highlight: 'rgb(199, 198, 203)',
  blackOverlay: 'rgba(0,0,0,0.6)',
  iconWhite: '#fff',
  iconBlack: '#101214',
  dynamicWhite: '#fff',
  dynamicBlack: '#1c1e21',
  dynamicBackground: '#fff',
  transparent: 'transparent',
  calpyse: '#2b7488',
  notification: 'rgb(27, 29, 33)',
  border: 'rgb(255, 255, 255)',
  card: 'rgb(255, 255, 255)',
};

export const LightTheme = {
  dark: false,
  colors: {
    ...palette,
    iconWhite: palette.black,
    iconBlack: palette.white,
    dynamicBackground: palette.dynamicBlack,
    shadow: palette.transparent,
    borderColor: palette.borderColorDark,
    tabBar: 'rgb(255, 255, 255)',
    foreground: '#ffffff',
    primary: {
      half: '#A5B0C2',
      one: '#99A6B9',
      two: '#8190A9',
      three: '#687B98',
      four: '#586880',
      five: '#475468',
      six: '#303947',
      seven: '#191E25',
      eight: '#030304',
      nine: '#000000',
    },
    secondary: {
      half: '#37B5FD',
      one: '#23ADFD',
      two: '#029CF5',
      three: '#0283CD',
      four: '#0169A4',
      five: '#014F7C',
      six: '#012C44',
      seven: '#00080D',
      eight: '#000000',
      nine: '#000000',
    },
  },
};

export const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    background: 'rgb(17,30,50)',
    foreground: palette.white,
    white: palette.white,
    text: palette.white,
    tabBar: 'rgb(0,0,0)',
    iconWhite: palette.black,
    iconBlack: palette.white,
    dynamicBackground: palette.dynamicBlack,
    shadow: palette.transparent,
    borderColor: palette.borderColorDark,
    primary: {
      half: '#f1f6f5',
      one: '#d9f0f1',
      two: '#abe5df',
      three: '#72c9bb',
      four: '#33a991',
      five: '#248d6a',
      six: '#1f7551',
      seven: '#1d5940',
      eight: '#153d30',
      nine: '#0e2623',
    },
    secondary: {
      half: '#f5f8f9',
      one: '#e0f1f8',
      two: '#bae1f1',
      three: '#87c2dd',
      four: '#4f9ec2',
      five: '#3b7da7',
      six: '#31628c',
      seven: '#284a6c',
      eight: '#1c324c',
      nine: '#111e32',
    },
  },
};

export function getSimpleTheme(extendedTheme: ExtendedTheme): Theme {
  return {
    dark: extendedTheme.dark,
    colors: {
      primary: extendedTheme.colors.primary.one, // pick one of the color from ColorRange
      background: extendedTheme.colors.background,
      card: extendedTheme.colors.card,
      text: extendedTheme.colors.text,
      border: extendedTheme.colors.border,
      notification: extendedTheme.colors.notification,
    },
  };
}
