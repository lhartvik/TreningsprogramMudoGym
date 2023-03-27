import React from 'react';
import {View, Text, Modal, StyleSheet, Button} from 'react-native';

type ErrorModalProps = {
  error?: Error;
  text: string;
};

const ErrorModal = ({error, text}: ErrorModalProps) => {
  return (
    <>
      <Modal visible={!!error} transparent={true}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.message}>{error?.message}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Close" />
            </View>
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  message: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    backgroundColor: '#ff6666',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  content: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default ErrorModal;
