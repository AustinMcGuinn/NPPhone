import React, {useCallback, useMemo, useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

// Theme
import tw from '../../../tailwind';

type ContactProps = {id: number; name: string; number: string};

const ContactMessageNewModal = React.forwardRef(
  ({id, name, number}: ContactProps, ref) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['45%', '75%'], []);

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
            <Text style={tw`text-black text-3xl font-medium`}>Message</Text>
          </View>
          <View style={tw`flex-row justify-center`}>
            <Text style={tw`text-black text-xl font-medium`}>{name}</Text>
          </View>
          <View style={tw`mt-5 bg-[#f0f0f0] rounded-lg p-3`}>
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
  },
);

export default ContactMessageNewModal;
