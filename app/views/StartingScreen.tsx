import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import useSWR from 'swr';
import {Exercise} from '../model';
import database from '@react-native-firebase/database';
import LoadingModal from '../modals/LoadingModal';
import ErrorModal from '../modals/ErrorModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

const StartingScreen = ({navigation}: any) => {
  const {data, error, isLoading} = useSWR<Array<Exercise>>(
    '/exercises',
    async (url: string) =>
      database()
        .ref(url)
        .once('value')
        .then((value: any) => value.val()),
  );

  const handleStart = () => {
    navigation.navigate('Exercise');
  };

  const handleEditExercises = () => {
    navigation.navigate('EditExercises');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.buttontext}>Velkommen til treningsappen!</Text>
      <Button title={'Start'} onPress={handleStart} />
      <LoadingModal isLoading={isLoading} />
      <ErrorModal error={error} text={'Feil ved henting av øvelser'} />
      <FlatList
        data={data}
        renderItem={data => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 20,
              }}>
              <Text>{data.item.name}</Text>
              <Text>{data.item.reps}stk</Text>
              <Text>{data.item.weight}lb</Text>
              <Text>{data.item.name}</Text>
            </View>
          );
        }}
      />
      <Button title={'Endre øvelser'} onPress={handleEditExercises} />
    </View>
  );
};

export default StartingScreen;
