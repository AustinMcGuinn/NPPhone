import 'react-native-gesture-handler';
import React from 'react';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

// Auth and theme providers
import {ThemeContextProvider} from './src/context/ThemeContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStackNavigation from './src/navigation/RootStackNavigation';

function App(): React.JSX.Element {
  return (
    <ThemeContextProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <RootStackNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeContextProvider>
  );
}

export default App;
