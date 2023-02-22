import * as React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet } from 'react-native';

import { View, Text } from '../../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../../types';
import CameraComponent from '../../components/Camera/Camera';

export default function AddPlantTwo({
  navigation,
}: RootStackScreenProps<'AddPlantTwo'>) {
  const width = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1 }}>
      <CameraComponent />
    </View>
  );
}
