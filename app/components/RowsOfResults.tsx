import {Difficulty, Exercise} from '../utils/utils';
import {Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/styles';
import Mediumtext from './Mediumtext';

type RORProps = {
  title?: string;
  exercises: Array<Exercise>;
};
const RowsOfResults = ({title, exercises}: RORProps) => {
  return (
    <>
      <Mediumtext>{title}</Mediumtext>
      {!!exercises &&
        Object.values(Difficulty).map(diff => (
          <Text key={diff + 'res'} style={styles.smalltext}>
            {exercises
              .map(e =>
                e.results
                  ? e.results.filter(d => d.difficulty === diff).length
                  : 0,
              )
              .reduce((s: string, n) => s + ' ' + n, '')}
          </Text>
        ))}
    </>
  );
};
export default RowsOfResults;
