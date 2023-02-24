import * as React from 'react';
import { KeyboardAvoidingView, TextInput } from 'react-native';
import Button from '../../components/Buttons/Button';
import MainLayout from '../../components/Layout/MainLayout';

import { View, Text } from '../../components/Themed';
import { colors } from '../../constants/Colors';
import { RootStackScreenProps, RootTabScreenProps } from '../../types';

export default function AddPlantOne({
  navigation,
}: RootStackScreenProps<'AddPlantOne'>) {
  const [treeName, setTreeName] = React.useState('');
  return (
    <MainLayout>
      <KeyboardAvoidingView behavior='padding'>
        <Text>Type in a name</Text>

        <TextInput
          value={treeName}
          onChangeText={(input) => setTreeName(input)}
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
          onPress={() => navigation.navigate('AddPlantTwo')}
          title='Next'
        />
      </KeyboardAvoidingView>
    </MainLayout>
  );
}
