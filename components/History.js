import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'; 
const arrowBack = require('../assets/back.png');
import React from 'react';

export default function History({ navigation }) {
  const sampleIMG1 = require('../assets/sampleIMG1.png');

  return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
          <Image source={arrowBack} style={styles.backIcon}/>
        </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>History</Text>
      </View>

      <View style={styles.listContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LandingPage')}
          style={styles.imageContainer}>
            <Image
              source={sampleIMG1}
              style={styles.imgStyle} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('LandingPage')}
          style={styles.imageContainer}>          
            <Image
              source={sampleIMG1}
               style={styles.imgStyle}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('LandingPage')}
          style={styles.imageContainer} >
            <Image
              source={sampleIMG1}
              style={styles.imgStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('LandingPage')}
          style={styles.imageContainer}>
          <Image
            source={sampleIMG1}
             style={styles.imgStyle} />

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  header: { 
    marginLeft: 5, 
    marginTop: 100,
  },
  headerText: {
    color: '#000',
    fontSize: 30,
    fontWeight: '600',
    // lineHeight: 26,
    padding: 20,
    fontWeight: 'medium'
  },
  pageContainer: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 5,
},
imageContainer: {
    borderColor: 'black',  
    borderWidth: 1, 
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#D7DFC9',
},
imgStyle: {
    width: 100, 
    height: 100,
},
  icon: {
    width: 20,
    height: 20,
  },
  goBackButton: {
    position: 'absolute',
    marginTop: 30,
    left: 10,
  },
  goBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    marginTop: 40
  },
  backIcon: {
    width: 25, // Adjust the width to match your design
    height: 25, // Adjust the height to match your design
    resizeMode: 'contain',
  },
});
