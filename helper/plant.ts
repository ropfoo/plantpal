import AsyncStorage from '@react-native-async-storage/async-storage';
import { Plant } from './types';

export async function createPlant(newPlant: Plant) {
  try {
    // get current plants
    const plantsJSON = await AsyncStorage.getItem('plants');
    if (plantsJSON) {
      const plants = JSON.parse(plantsJSON) as Plant[] | null;
      await AsyncStorage.setItem(
        'plants',
        JSON.stringify([...(plants ?? []), newPlant])
      );
    } else {
      await AsyncStorage.setItem('plants', JSON.stringify([newPlant]));
    }
    return newPlant;
  } catch (e) {
    // saving error
    console.log(e);
  }
}

export async function getPlants() {
  try {
    const plantsJSON = await AsyncStorage.getItem('plants');
    if (plantsJSON) {
      const plants = JSON.parse(plantsJSON) as Plant[] | null;
      return plants;
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function deleteAllPlants() {
  try {
    await AsyncStorage.removeItem('plants');
  } catch (e) {
    console.log(e);
  }
}
