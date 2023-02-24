import * as React from 'react';
import Button from '../../components/Buttons/Button';

import { View, Text } from '../../components/Themed';
import { usePlants } from '../../hooks/usePlants';
import { RootStackScreenProps, RootTabScreenProps } from '../../types';

export default function CreatePlantSpecies({
  navigation,
  route,
}: RootStackScreenProps<'CreatePlantSpecies'>) {
  const { createPlantMutation } = usePlants();
  return (
    <View style={{ flex: 1 }}>
      <Text>{route.params?.imgSrc}</Text>
      <Text>{route.params?.name}</Text>
      <Button
        title='Create'
        onPress={async () => {
          await createPlantMutation.mutateAsync({
            id: Date.now().toString(),
            imgSrc: route.params?.imgSrc ?? '',
            name: route.params?.name ?? '',
            species: 'Super Plant',
          });
          navigation.navigate('Root');
        }}
      />
    </View>
  );
}
