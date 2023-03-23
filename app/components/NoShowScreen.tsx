import {BackHandler, Button, Text, View} from 'react-native';
import {styles} from '../styles/styles';
import React, {PropsWithChildren} from 'react';

type NoShowProps = {
  isLoading: boolean;
  errormessage?: String;
};
const NoShowScreen = ({
  isLoading,
  errormessage,
  children,
}: NoShowProps & PropsWithChildren) => (
  <View style={styles.centered}>
    {isLoading && <Text style={styles.bigtext}>Loading...</Text>}
    {errormessage && <Text style={styles.smalltext}>{errormessage}</Text>}
    {!isLoading && !errormessage && (
      <Text style={styles.mediumtext}>{children}</Text>
    )}
    <Button title={'Exit'} onPress={BackHandler.exitApp} />
  </View>
);

export default NoShowScreen;
