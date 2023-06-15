import React, {useCallback, useEffect, useState} from 'react';
import useSWR from 'swr';
import {mapToExercise} from '../utils/utils';
import Knapperad from '../components/Knapperad';
import RowsOfResults from '../components/RowsOfResults';
import ShowExercise from '../components/ShowExercise';
import database from '@react-native-firebase/database';
import LoadingModal from '../modals/LoadingModal';
import ErrorModal from '../modals/ErrorModal';
import {Button} from 'react-native';
import {Difficulty, Exercise} from '../model';

const ExerciseScreen = ({navigation}: any) => {
  const {data, error, isLoading} = useSWR<Array<Exercise>>(
    '/exercises',
    async (url: string) =>
      database()
        .ref(url)
        .once('value')
        .then((value: any) => value.val()),
  );
  const [exercises, setExercises] = useState<Array<Exercise>>([]);
  useEffect(() => {
    setExercises(data?.map(mapToExercise) ?? []);
  }, [data]);

  const [chosen, setChosen] = useState(0);
  const goToNext = useCallback(() => {
    setChosen((chosen + 1) % exercises.length);
  }, [exercises.length, chosen]);

  useEffect(() => {
    if (exercises.some(e => !e.finished) && exercises[chosen].finished)
      goToNext();
  }, [exercises, chosen, goToNext]);

  const handleUploadResults = useCallback(
    () => navigation.navigate('Results', {exercises}),
    [navigation, exercises],
  );

  const exercise = exercises[chosen];

  const reportAndNext = useCallback(
    (d: Difficulty) => {
      const updatedResults = [
        ...exercise.results,
        {difficulty: d, timestamp: new Date().toISOString()},
      ];
      const finished = updatedResults.length >= 3 || exercise.finished;
      const updatedExercise: Exercise = {
        ...exercise,
        results: updatedResults,
        finished,
      };
      const updatedExercises = [...exercises];
      updatedExercises[chosen] = updatedExercise;
      setExercises(updatedExercises);
      goToNext();
    },
    [chosen, exercise, exercises, goToNext],
  );

  const handleCancel = useCallback(() => {
    const updatedExercise = {...exercise, finished: true};
    const updatedExercises = [...exercises];
    updatedExercises[chosen] = updatedExercise;
    setExercises(updatedExercises);
  }, [chosen, exercise, exercises]);

  const isFinished = exercises.every(e => e.finished);

  return (
    <>
      <LoadingModal isLoading={isLoading} />
      <ShowExercise
        exercise={exercises[chosen]}
        disabled={isFinished || isLoading || error}
        handlePress={goToNext}
        handleCancel={handleCancel}
      />
      <Knapperad
        disabled={isFinished || isLoading || error}
        onPress={reportAndNext}
      />
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
