import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ImageBackground, Image, Pressable } from 'react-native';
import login_bg1 from '../../assets/login_bg-1.png';
import button1 from '../../assets/button-1.png';
import { useFonts } from 'expo-font';

const ForgotPasswordScreen = ({ navigation }) => { // Add navigation prop here
  const [email, setEmail] = useState('');
  const sendInstructions = () => {
    // You would implement the logic to handle password reset here
  };
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf')
  });


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground source={login_bg1} style={styles.backgroundImage}>
        {/* Header with back navigation */}
        <Pressable style={styles.goBackButton} onPress={() => navigation.goBack()}>
          <Image source={button1} />
        </Pressable>

        <View style={styles.content}>
          <Text style={styles.title}>Reset password</Text>
          <Text style={styles.subtitle}>
            Enter the email associated with your account and we'll send an email with instructions to reset your password
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email Address"
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.button} onPress={sendInstructions}>
            <Text style={styles.buttonText}>Send Instructions</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the whole screen
    justifyContent: 'center',
  },
  goBackButton: {
    position: 'absolute', // Position it over the background
    padding: 10,
    top: 50, // Adjust accordingly
    left: 10,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 150, // Adjust this value to position your form accordingly
    bottom: 120,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
    color: '#049B04',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 20,
    color: 'gray',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    backgroundColor: '#049B04',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,

  },
  // ... any other styles you need
});

export default ForgotPasswordScreen;
