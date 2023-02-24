import { Plant } from '../helper/types';
import { View, Text } from './Themed';
import { Image, TouchableOpacity } from 'react-native';
interface PlantPreviewProps {
  plant: Plant;
  toPlant: () => void;
}

export default function PlantPreview({ plant, toPlant }: PlantPreviewProps) {
  return (
    <TouchableOpacity
      onPress={toPlant}
      style={{
        backgroundColor: 'green',
        width: 160,
        borderRadius: 26,
        overflow: 'hidden',
        marginBottom: 21,
      }}>
      <Image source={{ uri: plant.imgSrc }} style={{ height: 180 }} />
      <Text>{plant.name}</Text>
    </TouchableOpacity>
  );
}
