import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import login_bg1 from '../../assets/login_bg-1.png';


export default function AreYouA({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
}) 

  if (!fontsLoaded) {                                                                                                                                                                                                                                                                                           
    return null;
  }

  return (
    <ImageBackground
      source={login_bg1}
      style={styles.background}
    >
  
      <View style={styles.container}>
          <View style = {styles.textContainer}>
            <Text style={styles.text}>Are you a</Text>
          </View>
        <View style = {styles.buttonContainer}>
          <Pressable style={styles.FarmerButton} onPress={() => navigation.navigate('LoginSignUp')}>
            <Text style={styles.FarmerButtonText}>FARMER/GUEST</Text>
          </Pressable>
          <Pressable style={styles.AgronomistButton} onPress={() => navigation.navigate('LoginSignUp')}>
            <Text style={styles.AgronomistButtonText}>AGRONOMIST</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: '#086608',
    fontSize: 35,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 40, // Space between text and buttons
  },
  buttonContainer: {
    alignItems: 'center',
  }, 
  AgronomistButton: {
    backgroundColor: '#086608',
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
    marginVertical: 10, 
    width: 320,
  },
  FarmerButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 30,
    padding: 8,
    marginBottom: 10,
    width: 320,
  },
  AgronomistButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  FarmerButtonText: {
    color: '#086608',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
});
