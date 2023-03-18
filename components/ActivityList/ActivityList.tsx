import { View } from 'react-native';
import { PlantCheck } from '../../helper/types';
import { ActivityListItem } from './ActivityListItem';

interface ActivityListProps {
  activity: PlantCheck[];
}

export default function ActivityList({ activity }: ActivityListProps) {
  return (
    <View>
      {activity.map((plantCheck, index) => (
        <ActivityListItem
          key={plantCheck.date}
          plantCheck={plantCheck}
          isLast={index === activity.length - 1}
        />
      ))}
    </View>
  );
}
