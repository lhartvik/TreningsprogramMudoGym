import React, {useEffect, useState} from 'react';
import useSWR from 'swr';
import {Difficulty, Exercise, mapToExercise} from '../utils/utils';
import Knapperad from '../components/Knapperad';
import RowsOfResults from '../components/RowsOfResults';
import ShowExercise from '../components/ShowExercise';
import database from '@react-native-firebase/database';
import LoadingModal from '../modals/LoadingModal';
import ErrorModal from '../modals/ErrorModal';
import {Button} from 'react-native';

const ExerciseScreen = ({navigation}: any) => {
  const {data, error, isLoading} = useSWR<Array<Exercise>>(
    '/exercises',
    async (url: string) =>
      database()
        .ref(url)
        .once('value')
        .then((value: any) => value.val()),
  );
  useEffect(() => {
    setExercises(data?.map(mapToExercise) ?? []);
  }, [data]);

  const [chosen, setChosen] = useState(0);
  const [exercises, setExercises] = useState<Array<Exercise>>([]);
  const exercise = exercises[chosen];
  const finishedExercises = exercises.filter(e => e.results.length >= 3);
  const isFinished =
    finishedExercises.length > 0 &&
    finishedExercises.length === exercises.length;

  const handleUploadResults = () =>
    navigation.navigate('Results', {finishedExercises});

  const reportAndNext = (d: Difficulty) => {
    exercise.results = [
      ...exercise.results,
      {difficulty: d, timestamp: new Date().toISOString()},
    ];
    goToNext();
  };

  const goToNext = () => {
    setChosen((chosen + 1) % exercises.length);
  };

  return (
    <>
      <ErrorModal error={error} text={'Feil ved henting av øvelser'} />
      <LoadingModal isLoading={isLoading} />
      <ShowExercise exercise={exercises[chosen]} handlePress={goToNext} />
      <Knapperad disabled={isFinished} onPress={reportAndNext} />
      <RowsOfResults title={'In progress'} exercises={exercises} />
      <Button
        disabled={!isFinished || isLoading || error}
        title={'Last opp resultatene'}
        onPress={handleUploadResults}
      />
    </>
  );
};

export default ExerciseScreen;
