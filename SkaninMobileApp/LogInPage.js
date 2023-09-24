import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const LogInPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>

      {/* Go back arrow button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Sign Up Page')}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      
      {/* Log in */}
      <View style={styles.centeredContainer}>
        <Text style={styles.logInText}>Log in</Text>

        {/* Email */}
        <View style={styles.formContainer}>
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

        {/* Password */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#CCCCCC"
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        {/*Dont have an account? */}
        {/* <View style={styles.signInTextContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Sign Up Page')}>
            <Text style={styles.signInText}>Don't have an account? <Text style={styles.arrow}>→</Text> </Text>
          </TouchableOpacity>
        </View> */}

        {/* Login Button */}
        <TouchableOpacity style={styles.logInButton} onPress={() => navigation.navigate('Home Page')}>
          <Text style={styles.logInButtonText}>LOG IN</Text>
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
  signInTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    marginRight: 5,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 30,
  },
  centeredContainer: {
    width: '90%', // Adjusted width for reduced space on the sides
    maxWidth: 400, // Maximum width for the inner content
    marginBottom: 200,
  },
  logInText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
    marginTop: 10, // Added marginTop for spacing adjustment
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
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
  logInButton: {
    backgroundColor: '#03Ac13',
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInButtonText: {
    fontFamily : 'Arial',
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default LogInPage;