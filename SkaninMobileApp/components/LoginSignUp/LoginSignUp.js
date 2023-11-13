import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Pressable } from 'react-native';
import login_bg2 from '../../assets/login_bg-2.png';
import button1 from '../../assets/button-1.png';

export default function LoginSignUp( {navigation} ) {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf')
  });

  if (!fontsLoaded) {                                                                                                                                                                                                                                                                                           
    return null;
}

  return (
    <ImageBackground
      source={login_bg2}
      style={styles.background}
    >
      <View style={styles.container}>
        <Pressable style={styles.goBackButton} onPress={() => navigation.goBack()}>
          <Image source={button1} style={styles.buttonImage} />
        </Pressable>
        <Text style={styles.text}>
          The best {'\n'} 
          app {'\n'}
          for your {'\n'}
          rice crops {'\n'}
          {'\n'}
          {'\n'}
        </Text>
        <Pressable style={styles.LoginButton} onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.LoginButtonText}>Login</Text>
        </Pressable>
        <Pressable style={styles.SignUpButton} onPress={() => navigation.navigate('SignUpPage')}>
          <Text style={styles.SignUpButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    backgroundColor: 'transparent',
    alignItems: 'flex-start', 
    marginLeft: 25,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    marginTop: 0,
    color: '#086608',
    fontSize: 50,
    fontFamily: 'Montserrat-Bold',
  },
  SignUpButton: {
    backgroundColor: '#086608',
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    width: 350,
    alignItems: 'center',
  },
  LoginButton: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    width: 350,
    alignItems: 'center',
  },
  SignUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  LoginButtonText: {
    color: '#086608',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  goBackButton: {
    position: 'absolute',
    marginTop: -110,
    left: -10,
  },
  buttonImage: {
    width: 40,
    height: 40,
  },
});
