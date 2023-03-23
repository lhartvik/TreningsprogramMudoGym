import {Difficulty} from '../utils/utils';
import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../styles/styles';

const Knapperad = ({onPress}: {onPress: (d: Difficulty) => void}) => {
  const knapper = Object.values(Difficulty).map(d => (
    <View key={d} style={{flex: 1}}>
      <Pressable style={styles.button} onPress={() => onPress(d)}>
        <Text style={styles.buttontext}>{d}</Text>
      </Pressable>
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
