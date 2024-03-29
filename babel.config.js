module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        allowUndefined: true,
        safe: false,
        verbose: false,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
