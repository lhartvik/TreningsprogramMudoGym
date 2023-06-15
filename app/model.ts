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
  finished: boolean;
};

export const defaultExercise: Exercise = {
  finished: false,
  id: 0,
  name: 'løpe',
  reps: 1,
  results: [],
  weight: 0,
};

export type Result = {
  difficulty: Difficulty;
  timestamp: string;
};
