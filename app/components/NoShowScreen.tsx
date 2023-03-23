import {Text, View} from 'react-native';
import {styles} from '../styles/styles';
import React from 'react';

type NoShowProps = {
  isLoading: boolean;
  errormessage?: String;
};
const NoShowScreen = ({isLoading, errormessage}: NoShowProps) => (
  <View style={styles.centered}>
    {isLoading && <Text style={styles.buttontext}>Loadan</Text>}
    {errormessage && <Text style={styles.buttontext}>{errormessage}</Text>}
    {!isLoading && !errormessage && <Text style={styles.buttontext}>Tomt</Text>}
  </View>
);

export default NoShowScreen;
