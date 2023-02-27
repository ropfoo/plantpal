import * as React from 'react';
import { View, Text } from '../../components/Themed';
import { Image } from 'react-native';
import { RootStackScreenProps } from '../../types';
import CameraComponent from '../../components/Camera/Camera';
import MainLayout from '../../components/Layout/MainLayout';
import { CameraCapturedPicture } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import Button from '../../components/Buttons/Button';

export default function CreatePlantImage({
  navigation,
  route,
}: RootStackScreenProps<'CreatePlantImage'>) {
  const [picture, setPicture] = React.useState<CameraCapturedPicture>();
  async function savePicture(picture: CameraCapturedPicture) {
    const pictureUri = picture?.uri ?? '';
    const pictureDestinationUri = `${FileSystem.documentDirectory}/${route.params?.name}-main.jpg`;
    await FileSystem.copyAsync({
      from: pictureUri,
      to: pictureDestinationUri,
    });

    return pictureDestinationUri;
  }

  return (
    <MainLayout>
      <Text>{route.params?.name}</Text>
      {picture ? (
        <Image
          style={{
            width: '100%',
            height: 333,
            borderRadius: 32,
            overflow: 'hidden',
          }}
          source={picture}
        />
      ) : (
        <CameraComponent onCapture={setPicture} />
      )}

      {picture && (
        <Button
          title='retake'
          onPress={() => {
            setPicture(undefined);
          }}
        />
      )}
      <Button
        isDisabled={!picture}
        title='Next'
        onPress={async () => {
          if (picture) {
            const pictureUri = await savePicture(picture);
            navigation.navigate('CreatePlantSpecies', {
              imgSrc: pictureUri,
              name: route.params?.name,
            });
          }
        }}
      />
    </MainLayout>
  );
}
