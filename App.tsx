import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

// Auth and theme providers
import {ThemeContextProvider} from './src/context/ThemeContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <ThemeContextProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <SafeAreaView>
            <Text>Yo</Text>
          </SafeAreaView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeContextProvider>
  );
}

export default App;
