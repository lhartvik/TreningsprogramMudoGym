import ShowExercise from "../components/ShowExercise";
import { defaultExercise } from "../model";

const EditExercisesScreen = () => {
  return <ShowExercise exercise={defaultExercise} handlePress={() => {}} handleCancel={() => {}} disabled={false}/>
};

export default EditExercisesScreen;
