import React, {useCallback, useMemo, useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

// Theme
import tw from '../../../tailwind';

const MessageNewModal = React.forwardRef(({}, ref) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['50%', '75%'], []);

  // callbacks
  React.useImperativeHandle(ref, () => ({
    openModal: handlePresentModalPress,
  }));

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={tw`mx-4`}>
        <View style={tw`flex-row justify-center`}>
          <Text style={tw`text-black text-3xl font-medium`}>New Message</Text>
        </View>

        <View style={tw`relative mt-5`}>
          <TextInput
            style={tw`bg-[#f0f0f0] rounded-lg p-3 text-black text-xl`}
            placeholder="Number"
            placeholderTextColor="#757575"
          />
          <TouchableOpacity
            style={tw`absolute right-2 top-2 p-2 rounded-lg items-center justify-center`}
            onPress={() => console.log('Delete number input pressed')}>
            <Ionicons name="close" size={20} color="#60606b" />
          </TouchableOpacity>
        </View>
        <View style={tw`mt-3 bg-[#f0f0f0] rounded-lg p-3`}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={tw`text-black text-xl h-40`}
          />
        </View>
        <View style={tw`flex-row mt-3`}>
          <TouchableOpacity
            style={tw`bg-black flex-row p-2 rounded-lg items-center justify-around flex-1 mr-2`}
            onPress={() => console.log('Search button pressed')}>
            <Text style={tw`text-white text-3xl font-light`}>Submit</Text>
            <FontAwesome6 name="chevron-right" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-[#f86969] flex-row p-2 rounded-lg items-center justify-around flex-1 ml-2`}
            onPress={handleClosePress}>
            <Text style={tw`text-white text-3xl font-light`}>Cancel</Text>
            <FontAwesome6 name="x" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheetModal>
  );
});

export default MessageNewModal;
