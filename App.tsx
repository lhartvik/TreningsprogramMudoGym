import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StartingScreen from './app/views/StartingScreen';
import ExerciseScreen from './app/views/ExerciseScreen';
import ResultsScreen from './app/views/ResultsScreen';
import EditExercisesScreen from "./app/views/EditExercisesScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={StartingScreen} />
        <Stack.Screen name={'Exercise'} component={ExerciseScreen} />
        <Stack.Screen name={'Edit'} component={EditExercisesScreen} />
        <Stack.Screen name={'Results'} component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
