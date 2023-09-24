import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.centeredContainer}>
        <Text style={styles.signUpText}>Sign Up</Text>
        <View style={styles.fieldContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#CCCCCC"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#CCCCCC"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#CCCCCC"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View style={styles.signInTextContainer}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  centeredContainer: {
    width: '90%', // Adjusted width for reduced space on the sides
    maxWidth: 400, // Maximum width for the inner content
  },
  signUpText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fieldContainer: {
    marginBottom: 20,
    //margin: 10, // Added marginTop for spacing adjustment
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 5,
    borderColor: 'white'
    //paddingLeft: 15,
    //paddingRight: 10,
  },
  inputLabel: {
    fontSize: 12,
    color: '#CCCCCC',
    marginBottom: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
  signInTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    marginRight: 5,
  },
  arrow: {
    color: '#03Ac13',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#03Ac13',
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpForm;