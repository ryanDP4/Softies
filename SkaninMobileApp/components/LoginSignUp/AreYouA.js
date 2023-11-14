import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import login_bg1 from '../../assets/login_bg-1.png';


export default function AreYouA({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
}) 

  // if (!fontsLoaded) {                                                                                                                                                                                                                                                                                           
  //   return null;
  // }

  return (
    <ImageBackground
      source={login_bg1}
      style={styles.background}
    >
      <View style={styles.container}>
          <Text style={styles.text}>Are you a</Text>
        </View>
          <Pressable style={styles.FarmerButton} onPress={() => navigation.navigate('LoginSignUp')}>
            <Text style={styles.FarmerButtonText}>FARMER/GUEST</Text>
          </Pressable>
          <Pressable style={styles.AgronomistButton} onPress={() => navigation.navigate('LoginSignUp')}>
            <Text style={styles.AgronomistButtonText}>AGRONOMIST</Text>
          </Pressable>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 0,
    backgroundColor: 'transparent',
    alignItems: 'flex-start', 
    marginLeft: 110,
    marginBottom: 50,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    marginTop: 0,
    color: '#086608',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: -10,
    fontFamily: 'Montserrat-Bold',
  },
  AgronomistButton: {
    backgroundColor: '#086608',
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    width: 350,
    alignItems: 'center',
    marginLeft: 20,
  },
  FarmerButton: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    width: 350,
    alignItems: 'center',
    marginLeft: 20,
  },
  AgronomistButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  FarmerButtonText: {
    color: '#086608',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
});