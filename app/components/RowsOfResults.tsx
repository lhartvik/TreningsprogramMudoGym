import {Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/styles';
import Mediumtext from './Mediumtext';
import {Difficulty, Exercise} from '../model';

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
              .sort((a, b) => a.id - b.id)
              .map(e =>
                e.results
                  ? e.results.filter(d => d.difficulty === diff).length
                  : 0,
              )
              .reduce((s: string, n) => s + ' ' + n, '')}
          </Text>
        ))}
      {!!exercises && (
        <Text key={'resx'} style={styles.smalltext}>
          {exercises
            .sort((a, b) => a.id - b.id)
            .map(e => (e.finished ? 'x' : 0))
            .reduce((s: string, n) => s + ' ' + n, '')}
        </Text>
      )}
    </>
  );
};
export default RowsOfResults;
