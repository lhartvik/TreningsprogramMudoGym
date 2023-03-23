import {Pressable, Text} from 'react-native';
import {styles} from '../styles/styles';
import React from 'react';

type KnappProps = {
  title: string;
  onPress: () => void;
};
const Knapp = ({onPress, title}: KnappProps) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttontext}>{title}</Text>
  </Pressable>
);
export default Knapp;
