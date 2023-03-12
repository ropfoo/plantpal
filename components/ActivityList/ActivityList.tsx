import { PlantCheck } from '../../helper/types';
import { View, Text } from '../Themed';
import dayjs from 'dayjs';

interface ActivityListProps {
  activity: PlantCheck[];
}

export default function ActivityList({ activity }: ActivityListProps) {
  return (
    <View>
      {activity.map((plantCheck) => (
        <View key={plantCheck.date}>
          <Text>date: {dayjs(plantCheck.date).format('DD MM YYYY')}</Text>
          <Text>watered: {plantCheck.wasWatered.toString()}</Text>
        </View>
      ))}
    </View>
  );
}
