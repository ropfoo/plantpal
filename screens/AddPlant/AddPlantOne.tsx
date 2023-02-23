import * as React from 'react';
import { Button, TextInput } from 'react-native';

import { View, Text } from '../../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../../types';

export default function AddPlantOne({
  navigation,
}: RootStackScreenProps<'AddPlantOne'>) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Type in a name</Text>
      <TextInput />
      <Button onPress={() => navigation.navigate('AddPlantTwo')} title='Next' />
    </View>
  );
}
