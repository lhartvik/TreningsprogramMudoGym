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
  useEffect(() => {
    setExercises(data?.map(mapToExercise) ?? []);
  }, [data]);

  const goToNext = () => setChosen((chosen + 1) % exercises.length);
  const reportAndNext = (d: Difficulty) => {
    exercises[chosen].results.push(d);
    exercises[chosen].timestamps.push(new Date());
    goToNext();
  };

  if (isLoading || error || !exercises || exercises.length === 0) {
    return <NoShowScreen isLoading={isLoading} errormessage={error?.message} />;
  }
  return (
    <>
      <ShowExercise exercise={exercises[chosen]} handlePress={goToNext} />
      <Knapperad onPress={reportAndNext} />
      <RowsOfResults exercises={exercises} />
    </>
  );
};

export default ExerciseScreen;
