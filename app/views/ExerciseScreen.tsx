import React, {useEffect, useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import useSWR from 'swr';
import fetcher from '../db/firebase';

enum Difficulty {
  LETT = 'Lett',
  MIDDELS = 'Passe',
  TUNGT = 'Tungt',
}

type Exercise = {
  id: number;
  reps: number;
  name: string;
  weight: number;
  results: Array<Difficulty>;
};

function mapToExercise(d: any): Exercise {
  return {
    id: d.id,
    name: d.name,
    reps: d.reps,
    results: [],
    weight: d.weight,
  };
}

const ExerciseScreen = () => {
  const [number, setNumber] = useState(0);
  const {data, error, isLoading} = useSWR<Array<Exercise>>(
    '/exercises',
    fetcher,
  );
  const [errorstate, setError] = useState<String>();
  const [exercises, setExercises] = useState<Array<Exercise>>([]);
  useEffect(() => {
    setExercises(data?.map(d => mapToExercise(d)) ?? []);
  }, [data]);
  useEffect(() => {
    if (error) setError(error.message);
  }, [error]);

  const get = (id: number): Exercise | null =>
    !!exercises && exercises.length > id ? exercises[id] : null;

  const skipToNextExercise = () => {
    if (!!exercises && exercises?.length > 0)
      setNumber((number + 1) % exercises.length);
  };
  const handleNextExercise = (d: Difficulty) => {
    get(number)?.results.push(d);
    skipToNextExercise();
  };

  const knapper = Object.values(Difficulty).map(d => (
    <View key={d} style={{flex: 1}}>
      <Pressable style={styles.button} onPress={() => handleNextExercise(d)}>
        <Text style={styles.text}>{d}</Text>
      </Pressable>
    </View>
  ));

  const rowsOfResults = () => {
    if (!!exercises)
      return Object.values(Difficulty).map(diff => (
        <Text key={diff + 'res'} style={{fontSize: 15}}>
          {exercises
            .map(e =>
              e.results ? e.results.filter(d => d === diff).length : 0,
            )
            .reduce((s: string, n) => s + ' ' + n, '')}
        </Text>
      ));
    return [<Text>foo</Text>];
  };

  if (isLoading || errorstate || !exercises)
    return (
      <View style={styles.centered}>
        {isLoading && <Text style={styles.text}>Loadan</Text>}
        {errorstate && <Text style={styles.text}>{errorstate}</Text>}
        {!exercises && (
          <Text style={styles.text}>Yes we have no exercises</Text>
        )}
      </View>
    );
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Øvelse:</Text>
      <Text style={{fontSize: 32}}>{get(number)?.name}</Text>
      <Text style={{fontSize: 20}}>
        {get(number)?.reps}stk, {get(number)?.weight} lb
      </Text>
      <View style={{justifyContent: 'flex-end', paddingBottom: 40}}>
        <Button title={'Hopp over'} onPress={skipToNextExercise} />
      </View>
      <Text style={{fontSize: 16}}>Hvordan gikk det:</Text>
      <View
        style={{flex: 0.2, marginTop: 20, padding: 12, flexDirection: 'row'}}>
        {knapper}
      </View>
      {rowsOfResults()}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'black',
    margin: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#322222',
  },
});
export default ExerciseScreen;
