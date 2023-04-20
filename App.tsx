import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StartingScreen from './app/views/StartingScreen';
import ExerciseScreen from './app/views/ExerciseScreen';
import ResultsScreen from './app/views/ResultsScreen';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
    console.log('no user');
  }, []);

  // Handle user state changes

  useEffect(() => {
    function onAuthStateChanged(user: any) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [initializing]);
  if (initializing) return null;

  if (user) console.log({user});
  else {
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={StartingScreen} />
        <Stack.Screen name={'Exercise'} component={ExerciseScreen} />
        <Stack.Screen name={'Results'} component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
