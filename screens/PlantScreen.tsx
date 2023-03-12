import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ActivityList from '../components/ActivityList/ActivityList';
import Button from '../components/Buttons/Button';
import PlantImageMain from '../components/Plant/PlantImageMain';
import { Text, View } from '../components/Themed';
import CheckPlantModal from '../components/Water/CheckPlantModal';
import Colors, { colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { usePlant } from '../hooks/usePlant';
import { RootStackScreenProps } from '../types';

export default function PlantScreen({
  navigation,
  route,
}: RootStackScreenProps<'Plant'>) {
  const colorScheme = useColorScheme();
  const { plant, plantCheckMutation } = usePlant(route.params.id);

  const [isWaterModalOpen, setIsWaterModalOpen] = React.useState(false);

  if (!plant)
    return (
      <View>
        <Text>Plant not found</Text>
      </View>
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

      <CheckPlantModal
        isOpen={isWaterModalOpen}
        close={() => setIsWaterModalOpen(false)}
        onComplete={(wasWatered: boolean) =>
          plantCheckMutation.mutate({
            plantId: plant.id,
            date: new Date().toISOString(),
            wasWatered,
          })
        }
      />
      <Button title='water' onPress={() => setIsWaterModalOpen(true)} />

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
          <Text style={{ fontSize: 20 }}>Activity</Text>
          <ActivityList activity={plant.activity} />
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
