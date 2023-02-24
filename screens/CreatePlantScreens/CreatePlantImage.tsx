import * as React from 'react';
import { View, Text } from '../../components/Themed';

import { RootStackScreenProps } from '../../types';
import CameraComponent from '../../components/Camera/Camera';
import MainLayout from '../../components/Layout/MainLayout';
import { CameraCapturedPicture } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

export default function CreatePlantImage({
  navigation,
  route,
}: RootStackScreenProps<'CreatePlantImage'>) {
  async function savePicture(picture: CameraCapturedPicture) {
    const pictureUri = picture?.uri ?? '';

    await FileSystem.copyAsync({
      from: pictureUri,
      to: `${FileSystem.documentDirectory}/${route.params.plantName}-main.jpg`,
    });

    const readResult = await FileSystem.readDirectoryAsync(
      `${FileSystem.documentDirectory}`
    );
    console.log(readResult);
  }

  return (
    <MainLayout>
      <Text>{route.params.plantName}</Text>
      <CameraComponent onCapture={savePicture} />
    </MainLayout>
  );
}
