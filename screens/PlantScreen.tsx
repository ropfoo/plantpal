import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors, { colors } from '../constants/Colors';
import { getPlant } from '../helper/plant';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackScreenProps } from '../types';
import { Image } from 'react-native';

export default function PlantScreen({
  navigation,
  route,
}: RootStackScreenProps<'Plant'>) {
  const colorScheme = useColorScheme();
  const { data: plant } = useQuery([route.params.id], () =>
    getPlant(route.params.id)
  );

  return (
    <ScrollView style={{ backgroundColor: Colors[colorScheme].background }}>
      <View style={{ alignItems: 'flex-end' }}>
        <View
          style={{
            borderBottomStartRadius: 82,
            borderTopStartRadius: 16,
            overflow: 'hidden',
            position: 'relative',
            width: 300,
            height: 250,
          }}>
          <Image
            source={{ uri: plant?.imgSrc }}
            style={{
              width: 250,
              height: 250,
              position: 'absolute',
              zIndex: 10,
              right: 0,
            }}
          />
          <View
            style={{
              width: 250,
              height: 260,
              right: 0,
              backgroundColor: colors.lightcyan,
              position: 'absolute',
              zIndex: 5,
            }}
          />
        </View>
      </View>
      <Text>{plant?.name}</Text>
    </ScrollView>
  );
}
