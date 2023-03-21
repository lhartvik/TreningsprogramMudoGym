import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

const StartingScreen = ({navigation}: any) => {
  const handleStart = () => {
    navigation.navigate('Exercise');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Velkommen til treningsappen!</Text>
      <Button title={'Start'} onPress={handleStart} />
    </View>
  );
};

export default StartingScreen;
