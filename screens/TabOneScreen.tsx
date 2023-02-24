import * as React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors, { colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const colorScheme = useColorScheme();
  return (
    <ScrollView style={{ backgroundColor: Colors[colorScheme].background }}>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate('AddPlantOne')}
          title='Add Tree'
        />
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
