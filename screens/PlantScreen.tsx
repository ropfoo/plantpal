import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PlantImageMain from '../components/Plant/PlantImageMain';
import { Text, View } from '../components/Themed';
import Colors, { colors } from '../constants/Colors';
import { getPlant } from '../helper/plant';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackScreenProps } from '../types';

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
      <PlantImageMain plantName={plant?.name} />
      <View style={{ marginTop: 30 }} />
      <View style={styles.titleSection}>
        <Text style={styles.subtitle}>{plant?.species}</Text>
        <Text style={styles.title}>{plant?.name}</Text>
      </View>
      <View style={{ marginTop: 30 }} />

      <View style={{ paddingLeft: 31 }}>
        <View
          style={{
            backgroundColor: Colors[colorScheme].backgroundSecondary,
            paddingLeft: 38,
            paddingTop: 38,
            paddingBottom: 38,
            paddingRight: 16,
            borderTopStartRadius: 32,
            borderBottomStartRadius: 32,
          }}>
          <Text>This is some text</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.cyan,
    marginBottom: 7,
  },
  titleSection: {
    paddingHorizontal: 31,
    backgroundColor: 'transparent',
  },
});
