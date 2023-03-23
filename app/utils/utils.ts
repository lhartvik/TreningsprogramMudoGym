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
  results: Array<Difficulty>;
  timestamps: Array<Date>;
};

export function mapToExercise(d: any): Exercise {
  return {
    id: d.id,
    name: d.name,
    reps: d.reps,
    weight: d.weight,
    results: [],
    timestamps: [],
  };
}
