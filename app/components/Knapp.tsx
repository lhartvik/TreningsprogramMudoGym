import {Pressable, Text} from 'react-native';
import {styles} from '../styles/styles';
import React from 'react';

type KnappProps = {
  title: string;
  onPress: () => void;
  disabled: boolean;
};
const Knapp = ({onPress, title, disabled}: KnappProps) => (
  <Pressable
    disabled={disabled}
    style={disabled ? styles.disabledbutton : styles.button}
    onPress={onPress}>
    <Text style={styles.buttontext}>{title}</Text>
  </Pressable>
);
export default Knapp;
