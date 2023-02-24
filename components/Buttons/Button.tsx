import { TouchableHighlight, Text, FlexAlignType } from 'react-native';
import Colors, { colors } from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

interface ButtonProps {
  onPress: () => void;
  title: string;
  alignSlef?: FlexAlignType;
  isDisabled?: boolean;
}

export default function Button({
  onPress,
  title,
  alignSlef = 'center',
  isDisabled = false,
}: ButtonProps) {
  const colorScheme = useColorScheme();
  return (
    <TouchableHighlight
      disabled={isDisabled}
      underlayColor={colors.lightblue}
      style={{
        backgroundColor: isDisabled
          ? Colors[colorScheme].disabled
          : colors.blue,
        paddingVertical: 21,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0,
        alignSelf: alignSlef,
        minWidth: 200,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: colors.white,
        }}>
        {title}
      </Text>
    </TouchableHighlight>
  );
}
