import {Exercise} from '../model';

export function mapToExercise(d: any): Exercise {
  return {
    id: d.id,
    name: d.name,
    reps: d.reps,
    weight: d.weight,
    results: [],
    finished: false,
  };
}
