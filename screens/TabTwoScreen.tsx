import { Button, ImageBackground, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [picUri, setPicUri] = React.useState('test');
  const getImage = async () => {
    const readResult = await FileSystem.readDirectoryAsync(
      `${FileSystem.documentDirectory}`
    );
    console.log(readResult);

    // const file = await FileSystem.getContentUriAsync(readResult[0]);
    setPicUri(`${FileSystem.documentDirectory}/${readResult[0]}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Button onPress={getImage} title='getIamge' />
      <ImageBackground
        source={{ uri: `${FileSystem.documentDirectory}/test.jpg` }}
        borderRadius={10}
        style={{
          width: 100,
          height: 150,
          marginRight: 20,
          borderRadius: 5000,
        }}
      />
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='/screens/TabTwoScreen.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
