import {Exercise} from '../utils/utils';
import Bigtext from './Bigtext';
import Mediumtext from './Mediumtext';
import {Button, View} from 'react-native';

type ShowExerciseProps = {
  exercise: Exercise | null;
  handlePress: () => void;
};

const ShowExercise = ({exercise, handlePress}: ShowExerciseProps) => {
  return (
    <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
      <Mediumtext>Øvelse:</Mediumtext>
      <Bigtext>{exercise?.name ?? 'Løpe'}</Bigtext>
      <Mediumtext>
        {exercise ? `${exercise?.reps}stk, ${exercise?.weight} lb` : 'løpe'}
      </Mediumtext>
      <View style={{justifyContent: 'flex-end', paddingBottom: 40}}>
        <Button title={'Hopp over'} onPress={handlePress} />
      </View>
    </View>
  );
};
export default ShowExercise;
