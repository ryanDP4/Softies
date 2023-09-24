import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.middleContent}>
        <Text style={styles.questionText}>Are you a</Text>
        <TouchableOpacity style={styles.buttonGreen}>
          <Text style={styles.buttonText}>FARMER/GUEST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGreen1}>
          <Text style={styles.buttonText}>AGRONOMIST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  middleContent: {
    alignItems: 'center',
  },
  questionText: {
    fontSize: 28, // Increase the font size
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGreen: {
    backgroundColor: '#03AC13',
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 110,
    borderRadius: 30,
  },
  buttonGreen1: {
    backgroundColor: '#03AC13',
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 115,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default MyComponent;
