import { Image } from 'react-native';
import { colors } from '../../constants/Colors';
import GhostBlue from '../Avatars/GhostBlue';
import { View } from '../Themed';

interface PlantImageMainProps {
  plantUri?: string;
}

export default function PlantImageMain({ plantUri }: PlantImageMainProps) {
  const imageHeight = 260;
  const imageWidth = 250;
  return (
    <View style={{ alignItems: 'flex-end', position: 'relative' }}>
      <View
        style={{
          borderBottomStartRadius: 82,
          borderTopStartRadius: 12,
          overflow: 'hidden',
          position: 'relative',
          marginTop: -12,
          width: imageWidth,
          height: imageHeight + 10,
        }}>
        <View
          style={{
            width: imageWidth,
            height: imageHeight,
            overflow: 'hidden',
            borderBottomStartRadius: 82,
            borderTopStartRadius: 12,
            position: 'absolute',
            right: 0,
            zIndex: 10,
          }}>
          <Image
            source={{ uri: plantUri }}
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
          />
        </View>
        <View
          style={{
            width: imageWidth,
            height: imageHeight + 10,
            right: 0,
            backgroundColor: colors.lightcyan,
            position: 'absolute',
            zIndex: 5,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: -50,
          right: 21,
          backgroundColor: 'transparent',
        }}>
        <View
          style={{
            width: 94,
            height: 94,
            backgroundColor: colors.lightcyan,
            borderColor: colors.white,
            borderWidth: 6,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 400,
          }}>
          <GhostBlue />
        </View>
      </View>
    </View>
  );
}
