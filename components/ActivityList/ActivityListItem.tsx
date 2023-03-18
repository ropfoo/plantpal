import { View } from 'react-native';
import dayjs from 'dayjs';
import { Text } from '../Themed';
import Colors from '../../constants/Colors';
import { PlantCheck } from '../../helper/types';
import useColorScheme from '../../hooks/useColorScheme';

interface ActivityListItemProps {
  plantCheck: PlantCheck;
  isLast: boolean;
}

export function ActivityListItem({
  plantCheck,
  isLast,
}: ActivityListItemProps) {
  const colorScheme = useColorScheme();

  return (
    <View key={plantCheck.date} style={{ flexDirection: 'row' }}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 500,
            backgroundColor: Colors[colorScheme].text,
          }}
        />
        {!isLast && (
          <View
            style={{
              flex: 1,
              width: 1,
              backgroundColor: Colors[colorScheme].text,
            }}
          />
        )}
      </View>
      <View
        style={{
          paddingBottom: isLast ? 0 : 40,
          paddingLeft: 23,
          marginTop: -3,
        }}>
        <Text style={{ fontWeight: 'bold' }}>
          {dayjs(plantCheck.date).format('DD.MM.YYYY')}
        </Text>
        {plantCheck.wasWatered ? (
          <Text>Watered</Text>
        ) : (
          <Text>Checked soil moisture</Text>
        )}
      </View>
    </View>
  );
}
