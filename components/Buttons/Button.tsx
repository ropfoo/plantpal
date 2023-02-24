import { TouchableHighlight, Text, FlexAlignType } from 'react-native';
import { colors } from '../../constants/Colors';

interface ButtonProps {
  onPress: () => void;
  title: string;
  alignSlef?: FlexAlignType;
}

export default function Button({
  onPress,
  title,
  alignSlef = 'center',
}: ButtonProps) {
  return (
    <TouchableHighlight
      style={{
        backgroundColor: colors.blue,
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
