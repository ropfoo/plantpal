import * as React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors, { colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { usePlants } from '../hooks/usePlants';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const colorScheme = useColorScheme();
  const { plantsQuery } = usePlants();

  console.log(plantsQuery.data);
  return (
    <ScrollView style={{ backgroundColor: Colors[colorScheme].background }}>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate('CreatePlantName')}
          title='Add Plant'
        />

        {plantsQuery.data?.map((plant) => (
          <View key={plant.id}>
            <Text style={{ color: 'red' }}>{plant.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: { backgroundColor: colors.midnight },
  camera: {
    height: 300,
    width: 300,
  },
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
