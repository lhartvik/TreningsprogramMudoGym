import Bigtext from './Bigtext';
import Mediumtext from './Mediumtext';
import {View} from 'react-native';
import Knapp from './Knapp';
import {Exercise} from '../model';

type ShowExerciseProps = {
  exercise: Exercise | null;
  handlePress: () => void;
  handleCancel: () => void;
  disabled: boolean;
};

const ShowExercise = ({
  exercise,
  handlePress,
  handleCancel,
  disabled,
}: ShowExerciseProps) => {
  return (
    <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
      <Mediumtext>Øvelse:</Mediumtext>
      <Bigtext>{exercise?.name ?? 'Løpe'}</Bigtext>
      <Mediumtext>
        {exercise ? `${exercise?.reps}stk, ${exercise?.weight} lb` : 'løpe'}
      </Mediumtext>
      <View style={{justifyContent: 'flex-end', paddingBottom: 40}}>
        <Knapp disabled={disabled} title={'Hopp over'} onPress={handlePress} />
        <Knapp disabled={disabled} title={'Avbryt'} onPress={handleCancel} />
      </View>
    </View>
  );
};
export default ShowExercise;
