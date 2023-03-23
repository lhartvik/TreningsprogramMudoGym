import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/styles';
import {Text} from 'react-native';

const Bigtext = (props: PropsWithChildren) => (
  <Text style={styles.bigtext}>{props.children}</Text>
);
export default Bigtext;
