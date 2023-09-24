// import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AccountCreatedPage = ({ navigation }) => {
  const imagePath = require('./assets/check mark.png')
  return (
    <TouchableOpacity style = {styles.touchable} onPress={() => navigation.navigate('Log In Page')}>{/* Go back arrow button */}
      <View style={styles.container}>

      {/* Removed Back Button*/}
      {/* <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity> */}

      {/* Account Created Text */}
      <Text style={styles.accountCreatedText}>Account Created</Text>

      {/* Check mark */}
      <Image source = {imagePath} style = {styles.image}/>
      
      {/* Tap Anywhere to Continue */}
      
        <Text style={styles.text}>Tap anywhere to continue</Text>
      
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    margin:0,
    flex:1,
    paddding:0
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
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

  accountCreatedText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  image: {
    width: 55,
    height: 55,
  },

  tapButton: {
    position: 'absolute',
    middle: 10,
    marginTop: 600,
    zIndex: 1,
  },

  tapText: {
    fontsize: 16,
  }
});

export default AccountCreatedPage;