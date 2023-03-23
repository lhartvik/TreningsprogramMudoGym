import React, {PropsWithChildren} from 'react';
import {styles} from '../styles/styles';
import {Text} from 'react-native';

const Mediumtext = (props: PropsWithChildren) => (
  <Text style={styles.mediumtext}>{props.children}</Text>
);
export default Mediumtext;
