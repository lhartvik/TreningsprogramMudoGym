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

export type Result = {
  difficulty: Difficulty;
  timestamp: string;
};
