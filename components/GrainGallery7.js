import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const arrowBack = require('../assets/back.png');
const RecentScans1 = ({ navigation, route }) => {
    const { diseaseName} = route.params.diseaseName//.split(" ")[-1];
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
          <Image source={arrowBack} style={styles.backIcon}/>
        </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{diseaseName}</Text> 
          </View>


        <Image source={require('../assets/sampleIMG5.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>Brown Plant Hopper</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>What it does</Text>
          <Text style={styles.description}>
          High population of planthoppers cause leaves to initially turn orange-yellow before becoming brown and dry and this is a condition called hopperburn that kills the plant.

            BPH can also transmit Rice Ragged Stunt and Rice Grassy Stunt diseases. Neither disease can be cured.
          </Text>
          <Text style={styles.recommendationTitle}>Why and where it occurs</Text>
          <Text style={styles.recommendationText}>
          Planthoppers can be a problem in rainfed and in irrigated wetland environments. It also occurs in areas with continuous submerged conditions in the field, high shade, and humidity.

            Closed canopy of the rice plants, densely seeded crops, excessive use of nitrogen, and early season insecticide spraying also favors insect development.
            </Text>        
          <Text style={styles.identifyTitle}>How to identify</Text>
          <Text style={styles.identifyText}>Check for the presence of insect:

            crescent-shaped white eggs inserted into the midrib or leaf sheath
            white to brown nymphs
            brown or white adults feeding near the base of tillers

            Check the field for:

            hopperburn or yellowing, browning and drying of plant
            ovipositional marks exposing the plant to fungal and bacterial infections
            presence of honeydew and sooty molds in the bases of areas infected
            plants with ragged stunt or grassy stunt virus disease
            Hopperburn is similar to the feeding damage or "bugburn" caused by the rice black bug. To confirm hopperburn caused by planthoppers, check for the presence of sooty molds at the base of the plant.
          </Text>
        
        </View>
      </ScrollView>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    marginHorizontal: 10,
    paddingTop: 70, // Adjust this value to ensure the header is correctly positioned
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10, // Added padding to account for status bar height
  },
  backButton: {
    position: 'absolute', 
    top: 10,
    left: 10,
    width: 30,
    height: 30,
  },
  backIcon: {
      width: 25, // Adjust the width to match your design
      height: 25, // Adjust the height to match your design
      resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Adjusted the font color to white
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 200, // Adjust height accordingly
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 10,
  },
  class: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black', // Adjusted to match the theme color in the image
  },
  classification: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#049B04', // Adjusted to match the theme color in the image
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#049B04', // Adjusted to match the theme color in the image
  },
  recommendationText: {
    fontSize: 16,
    marginTop: 5,
  },
  identifyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#049B04',
  },
  identifyText: {
    fontSize: 16,
    marginTop: 5,
  },
  // ... other styles for icons and texts ...
});


export default RecentScans1; // Export the component