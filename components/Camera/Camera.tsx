import { CameraType, Camera, CameraCapturedPicture } from 'expo-camera';
import { useRef, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import * as React from 'react';
import {
  Button,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../../constants/Colors';

interface CameraComponentProps {
  isActive?: boolean;
}

export default function CameraComponent({
  isActive = true,
}: CameraComponentProps) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [pictures, setPictures] = useState<CameraCapturedPicture[]>([]);
  // if (!permission) ...

  // if (!permission.granted) ...

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  let cameraRef = useRef<Camera>(null);

  async function takePicture() {
    await requestPermission();
    const pic = await cameraRef.current?.takePictureAsync();
    if (pic) {
      setPictures((pics) => (pics?.length ? [pic, ...pics] : [pic]));
    }
  }

  async function savePicture() {
    const samplePicUri = pictures[0]?.uri ?? '';
    // const fileName = pictures[0].uri.;
    // console.log(fileName);
    // console.log(FileSystem.documentDirectory);

    const copyPic = await FileSystem.copyAsync({
      from: samplePicUri,
      to: `${FileSystem.documentDirectory}/test.jpg`,
    });

    const readResult = await FileSystem.readDirectoryAsync(
      `${FileSystem.documentDirectory}`
    );
    console.log(readResult);
  }

  React.useEffect(() => {
    console.log('components mounts');
    // cameraRef.current?.
  }, []);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isActive && (
        <Camera
          ref={cameraRef}
          type={type}
          style={{ width: '100%', height: 333, borderRadius: 32 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {/* <TouchableOpacity
              style={{ width: 300, height: 100 }}
              onPress={toggleCameraType}>
              <Text style={{ color: 'red' }}>Flip Camera</Text>
            </TouchableOpacity> */}
          </View>
        </Camera>
      )}
      <View style={{ paddingTop: 21 }} />
      <TouchableOpacity
        onPress={takePicture}
        style={{
          width: 83,
          height: 83,
          backgroundColor: colors.red,
          borderRadius: 5000,
          borderWidth: 6,
          borderColor: colors.lightcyan,
        }}
      />
      <Button title='save image' onPress={savePicture}></Button>
      <ScrollView horizontal>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          {pictures?.map((picture) => (
            <ImageBackground
              key={picture.uri}
              source={{ uri: picture && picture.uri }}
              borderRadius={10}
              style={{
                width: 100,
                height: 150,
                marginRight: 20,
                borderRadius: 5000,
              }}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
