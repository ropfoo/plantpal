import * as React from 'react';
import { KeyboardAvoidingView, TextInput } from 'react-native';
import Button from '../../components/Buttons/Button';
import MainLayout from '../../components/Layout/MainLayout';

import { View, Text } from '../../components/Themed';
import { colors } from '../../constants/Colors';
import { RootStackScreenProps } from '../../types';

export default function CreatePlantName({
  navigation,
}: RootStackScreenProps<'CreatePlantName'>) {
  const [plantName, setPlantName] = React.useState('');
  return (
    <MainLayout>
      <KeyboardAvoidingView behavior='padding'>
        <Text>Type in a name</Text>

        <TextInput
          value={plantName}
          onChangeText={(input) => setPlantName(input)}
          placeholder='blaba'
          placeholderTextColor={colors.darkcyan}
          style={{
            backgroundColor: colors.lightcyan,
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 14,
            borderRadius: 12,
            fontWeight: 'bold',
          }}
        />
        <View style={{ paddingTop: 20 }} />
        <Button
          onPress={() => navigation.navigate('CreatePlantImage', { plantName })}
          title='Next'
        />
      </KeyboardAvoidingView>
    </MainLayout>
  );
}
