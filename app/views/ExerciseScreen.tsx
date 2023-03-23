import React, {useEffect, useState} from 'react';
import useSWR from 'swr';
import fetcher from '../db/firebase';
import {Difficulty, Exercise, mapToExercise} from '../utils/utils';
import Knapperad from '../components/Knapperad';
import RowsOfResults from '../components/RowsOfResults';
import ShowExercise from '../components/ShowExercise';
import NoShowScreen from '../components/NoShowScreen';

const ExerciseScreen = () => {
  const [chosen, setChosen] = useState(0);
  const {data, error, isLoading} = useSWR<Array<Exercise>>(
    '/exercises',
    fetcher,
  );
  const [exercises, setExercises] = useState<Array<Exercise>>([]);
  const [finishedExercises, setFinishedExercises] = useState<Array<Exercise>>(
    [],
  );
  useEffect(() => {
    setExercises(data?.map(mapToExercise) ?? []);
    setFinishedExercises([]);
  }, [data]);

  const goToNext = () => setChosen((chosen + 1) % exercises.length);
  const reportAndNext = (d: Difficulty) => {
    const exercise = exercises[chosen];
    exercise.results = [...exercise.results, d];
    exercise.timestamps = [...exercise.timestamps, new Date()];
    if (exercise.results.length >= 3) {
      setExercises(exercises.filter(e => e !== exercise));
      setFinishedExercises([...finishedExercises, exercise]);
    }
    goToNext();
  };

  if (isLoading || error || !exercises || exercises.length === 0) {
    return (
      <NoShowScreen isLoading={isLoading} errormessage={error?.message}>
        {exercises.length === 0 ? 'Ferdig' : ''}
      </NoShowScreen>
    );
  }
  return (
    <>
      <ShowExercise exercise={exercises[chosen]} handlePress={goToNext} />
      <Knapperad onPress={reportAndNext} />
      <RowsOfResults title={'In progress'} exercises={exercises} />
      <RowsOfResults title={'Finished'} exercises={finishedExercises} />
    </>
  );
};

export default ExerciseScreen;
