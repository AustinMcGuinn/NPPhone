import 'react-native-gesture-handler';
import React from 'react';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

// Auth and theme providers
import {ThemeContextProvider} from './src/context/ThemeContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStackNavigation from './src/navigation/RootStackNavigation';
import {AuthProvider} from './src/context/AuthContext';

function App(): React.JSX.Element {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <RootStackNavigation />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </AuthProvider>
    </ThemeContextProvider>
  );
}

export default App;
