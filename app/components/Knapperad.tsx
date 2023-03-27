import {Difficulty} from '../utils/utils';
import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../styles/styles';
import Knapp from './Knapp';

type KnapperadProps = {
  onPress: Function;
  disabled: boolean;
};

const Knapperad = ({onPress, disabled}: KnapperadProps) => {
  const knapper = Object.values(Difficulty).map(d => (
    <View key={d} style={{flex: 1}}>
      <Knapp disabled={disabled} title={d} onPress={() => onPress(d)}></Knapp>
    </View>
  ));

  return (
    <>
      <Text style={styles.mediumtext}>Hvordan gikk det:</Text>
      <View style={{flex: 0.2, padding: 2, flexDirection: 'row'}}>
        {knapper}
      </View>
    </>
  );
};
export default Knapperad;
