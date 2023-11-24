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

//   if (!fontsLoaded) {                                                                                                                                                                                                                                                                                           
//     return null;
// }

  return (
    <ImageBackground
      source={login_bg2}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.goBackButton}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={button1} style={styles.buttonImage} />
          </Pressable>
        </View>
        <View style = {styles.textContainer}>
          <Text style={styles.text}>
            The best {'\n'} 
            app {'\n'}
            for your {'\n'}
            rice crops {'\n'}
            {'\n'}
            {'\n'}
          </Text>
        </View>
        <View style = {styles.buttonContainer}>
          <Pressable style={styles.LoginButton} onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.LoginButtonText}>Login</Text>
          </Pressable>
          <Pressable style={styles.SignUpButton} onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={styles.SignUpButtonText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 200,
    marginLeft: 20,
  },
  text: {
    color: '#086608',
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
  },
  buttonContainer: {
    alignItems: 'center',
  }, 
  SignUpButton: {
    backgroundColor: '#086608',
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    marginVertical: 10, 
    width: 320,
  },
  LoginButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    marginVertical: 10, 
    width: 320,
  },
  SignUpButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  LoginButtonText: {
    color: '#086608',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  goBackButton: {
    position: 'absolute',
    marginTop: 80,
    left: 10,
  },
  buttonImage: {
    width: 40,
    height: 40,
  },
});
