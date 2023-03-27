export enum Difficulty {
  LETT = 'Lett',
  MIDDELS = 'Passe',
  TUNGT = 'Tungt',
}

export type Exercise = {
  id: number;
  reps: number;
  name: string;
  weight: number;
  results: Array<Result>;
};

export type Result = {
  difficulty: Difficulty;
  timestamp: string;
};

export function mapToExercise(d: any): Exercise {
  return {
    id: d.id,
    name: d.name,
    reps: d.reps,
    weight: d.weight,
    results: [],
  };
}
