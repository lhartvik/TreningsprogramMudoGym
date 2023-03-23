import {Difficulty, Exercise} from '../utils/utils';
import {Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/styles';

const RowsOfResults = ({exercises}: {exercises: Array<Exercise>}) => {
  return (
    <>
      {!!exercises &&
        Object.values(Difficulty).map(diff => (
          <Text key={diff + 'res'} style={styles.smalltext}>
            {exercises
              .map(e =>
                e.results ? e.results.filter(d => d === diff).length : 0,
              )
              .reduce((s: string, n) => s + ' ' + n, '')}
          </Text>
        ))}
    </>
  );
};
export default RowsOfResults;
