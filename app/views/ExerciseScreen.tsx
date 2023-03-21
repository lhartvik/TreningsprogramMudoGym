import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

enum Difficulty {
  LETT = "Lett",
  MIDDELS = "Passe",
  TUNGT = "Tungt",
}

type Exercise = {
  id: number;
  reps: number;
  name: string;
  weight: number;
  results: Array<Difficulty>;
};

const defaultExercise = {
  reps: 12,
};

const ExerciseScreen = () => {
  const [exercise, setExercise] = useState(0);

  const [exercises, setExercises] = useState<Array<Exercise>>(
    [
      { id: 0, name: "Lat pulldown", weight: 90 },
      { id: 1, name: "Chest press", weight: 70 },
      { id: 2, name: "Seated row", weight: 50 },
      { id: 3, name: "Abdominal", weight: 120 },
      { id: 4, name: "Prone leg curl", weight: 60 },
      { id: 5, name: "Leg extension", weight: 80 },
      { id: 6, name: "Leg press", weight: 215 }
    ].map(o => ({ ...o, results: [], ...defaultExercise }))
  );

  const get = (id: number) => {
    return exercises.find(e => e.id === id);
  };
  const currentExercise = get(exercise);
  const goToNextExercise = () => setExercise((exercise + 1) % exercises.length);
  const handleNextExercise = (d: Difficulty) => {
    currentExercise?.results.push(d);
    goToNextExercise();
  };

  const knapper = Object.values(Difficulty).map(d => (
    <View key={d} style={{ flex: 1 }}>
      <Pressable style={styles.button} onPress={() => handleNextExercise(d)}>
        <Text style={styles.text}>{d}</Text>
      </Pressable>
    </View>
  ));

  const rowsOfResults = Object.values(Difficulty).map(diff => (
    <Text key={diff + "res"} style={{ fontSize: 15 }}>
      {exercises
        .map(e => e.results.filter(d => d === diff).length)
        .reduce((s: string, n) => s + " " + n, "")}
    </Text>
  ));

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Øvelse:</Text>
      <Text style={{ fontSize: 32 }}>{currentExercise?.name}</Text>
      <Text style={{ fontSize: 20 }}>
        {currentExercise?.reps}stk, {currentExercise?.weight} lb
      </Text>
      <View style={{justifyContent: "flex-end", paddingBottom: 40 }}>
        <Button title={'Hopp over'} onPress={goToNextExercise} />
      </View>
      <Text style={{ fontSize: 16 }}>Hvordan gikk det:</Text>
      <View
        style={{ flex: 0.2, marginTop: 20, padding: 12, flexDirection: "row" }}>
        {knapper}
      </View>
      {rowsOfResults}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "black",
    margin: 3
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white"
  }
});
export default ExerciseScreen;
