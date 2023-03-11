import AsyncStorage from '@react-native-async-storage/async-storage';
import { Plant, WaterPlantData } from './types';

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

export async function updatePlant(updatedPlant: Plant) {
  try {
    const plantsJSON = await AsyncStorage.getItem('plants');
    if (plantsJSON) {
      const plants = JSON.parse(plantsJSON) as Plant[] | null;
      return plants?.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      );
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getPlant(id: string) {
  try {
    const plantsJSON = await AsyncStorage.getItem('plants');
    if (plantsJSON) {
      const plants = JSON.parse(plantsJSON) as Plant[] | null;
      return plants?.find((plant) => plant.id === id);
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

export async function waterPlant(id: string, { date }: WaterPlantData) {
  try {
    const plant = await getPlant(id);
    if (plant) {
      const updatedPlant: Plant = {
        ...plant,
        lastWatering: date,
        wateringHistory: [date, ...(plant.wateringHistory ?? [])],
      };
      console.log(updatedPlant);
      const updatedPlants = await updatePlant(updatedPlant);
      if (updatedPlants) {
        await AsyncStorage.setItem('plants', JSON.stringify(updatedPlants));
      }
    }
  } catch (e) {
    console.log(e);
  }
}
