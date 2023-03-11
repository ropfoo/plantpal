import React from 'react';
import { Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../Buttons/Button';
import { View, Text } from '../Themed';

interface WaterModalProps {
  close: () => void;
  isOpen: boolean;
  onWater: () => void;
}

export default function WaterModal({
  close,
  isOpen,
  onWater,
}: WaterModalProps) {
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
            <Button title='water' onPress={onWater} />
            <Button title='close' onPress={close} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
