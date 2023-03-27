import {View, Text, Modal, ActivityIndicator, StyleSheet} from 'react-native';

type LoadingModalProps = {
  isLoading: boolean;
};

const LoadingModal = ({isLoading}: LoadingModalProps) => {
  return (
    <>
      <Modal visible={isLoading} transparent={true}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.text}>Loading...</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default LoadingModal;
