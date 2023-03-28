import {
  BackHandler,
  Button,
  Linking,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import useSWR from 'swr';
import ErrorModal from '../modals/ErrorModal';
import LoadingModal from '../modals/LoadingModal';

const ResultsScreen = ({
  route: {
    params: {exercises},
  },
}: any) => {
  const {error, isLoading} = useSWR('results', key =>
    database().ref(key).push(exercises),
  );
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setTimeout(() => setDisabled(false), 2000);
  }, []);
  const handleClose = () => {
    // Close the app
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else if (Platform.OS === 'android') {
      BackHandler.exitApp();
    }
  };

  return (
    <>
      <ErrorModal error={error} text={'Feil ved opplasting av øvelser'} />
      <LoadingModal isLoading={isLoading} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Suksess! Nå har vi snart masse data å plotte grafer av og mye moro.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button disabled={disabled} title="Close" onPress={handleClose} />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    textShadowColor: '#ccc',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  buttonContainer: {
    backgroundColor: '#ff6666',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});

export default ResultsScreen;
