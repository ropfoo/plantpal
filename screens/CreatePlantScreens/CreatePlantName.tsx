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
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
          Type in a name
        </Text>
        <View style={{ paddingTop: 38 }} />

        <TextInput
          value={plantName}
          //   autoFocus
          autoCorrect={false}
          spellCheck={false}
          onChangeText={(input) => setPlantName(input)}
          placeholder='blaba'
          placeholderTextColor={colors.darkcyan}
          style={{
            backgroundColor: colors.lightcyan,
            fontSize: 16,
            paddingVertical: 21,
            paddingHorizontal: 16,
            borderRadius: 12,
            fontWeight: 'bold',
          }}
        />
        <View style={{ paddingTop: 85 }} />
        <Button
          isDisabled={!plantName}
          onPress={() =>
            navigation.navigate('CreatePlantImage', { name: plantName })
          }
          title='Next'
        />
      </KeyboardAvoidingView>
    </MainLayout>
  );
}
