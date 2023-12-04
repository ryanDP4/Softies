import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import imagePath from '../assets/skanin_logo.png';
import * as Font from 'expo-font';

export default function Landing({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [loggedIn, setLoggedIn ] = useState(false)
    const handleOnPress = async () => {
      try {
        const response = await fetch('https://softies-backend-production.up.railway.app/api/users/get_user', { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
        const result = await response.json();
        console.log(result.loggedin)
        if (result.loggedin == true){
            navigation.navigate('Homepage')
        //   return true
        } else{
            navigation.navigate('AreYouA')
        }
      } catch (error) {
      }
    };
    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync({
                    'Ultra-Regular': require('../assets/fonts/ultra/Ultra-Regular.ttf'),
                    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
                });
                setFontsLoaded(true);
            } catch (e) {
            }
        }

        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>; 
    }

    return (
        <TouchableOpacity
            title="SplashScreen"
            onPress={() => handleOnPress()}
            style={styles.touchable}
        >
            <View style={styles.page}>
                <View style={styles.imageContainer}>
                    <Image source={imagePath} style={styles.image} />
                </View>
                <View style={styles.continueContainer}>
                    <Text style={styles.continueText}>Tap anywhere to continue</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: '#white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 5,
        paddingTop: 58,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '65%', 
        aspectRatio: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    appTitleContainer: { 
        
    },  
    appTitle: {
      fontSize: 42,
      marginTop: '1vh',
      fontFamily: 'Ultra-Regular',
      color: 'green'
    },
    appMiniTitle: {
        fontSize: 18,
      
      fontFamily: 'Montserrat-Regular',
      color: 'green'
    },
    continueContainer: {
      flex:1,
    },  
    continueText: {
        fontSize: 13,
        color: '#222222',
    },
    touchable: {
        margin:0,
        flex:1,
        paddding:0
      },
}) 