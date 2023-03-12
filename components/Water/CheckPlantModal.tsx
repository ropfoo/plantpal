import React from 'react';
import { Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../Buttons/Button';
import { View, Text } from '../Themed';

interface CheckPlantModalProps {
  close: () => void;
  isOpen: boolean;
  onComplete: (wasWatered: boolean) => void;
}

export default function CheckPlantModal({
  close,
  isOpen,
  onComplete,
}: CheckPlantModalProps) {
  const [wasWatered, setWasWatered] = React.useState(false);

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <Modal
        visible={isOpen}
        animationType='fade'
        presentationStyle='overFullScreen'
        transparent>
        <View
          style={{
            height: '100%',
            backgroundColor: 'rgba(0, 25, 62, 0.9)',
            justifyContent: 'center',
          }}>
          <View style={{ height: '70%' }}>
            <Text>Hello this is a Modal</Text>
            <Button title='water' onPress={() => onComplete(true)} />
            <Button title='just check' onPress={() => onComplete(false)} />
            <Button title='close' onPress={close} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
