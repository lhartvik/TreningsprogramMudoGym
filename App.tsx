import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StartingScreen from './app/views/StartingScreen';
import ExerciseScreen from './app/views/ExerciseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={StartingScreen} />
        <Stack.Screen name={'Exercise'} component={ExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
