import database from '@react-native-firebase/database';

const fetcher = async (url: string) =>
  await database()
    .ref(url)
    .once('value')
    .then(value => value.val());
export default fetcher;
