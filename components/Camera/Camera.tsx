import { CameraType, Camera, CameraCapturedPicture } from 'expo-camera';
import { useRef, useState } from 'react';
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
  onCapture?: (picture: CameraCapturedPicture) => void;
}

export default function CameraComponent({
  isActive = true,
  onCapture,
}: CameraComponentProps) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [picture, setPicture] = useState<CameraCapturedPicture>();
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
      setPicture(pic);
      if (onCapture) onCapture(pic);
    }
  }

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
    </View>
  );
}
