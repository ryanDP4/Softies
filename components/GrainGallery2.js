import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const arrowBack = require('../assets/back.png');
const RecentScans1 = ({ navigation, route }) => {
  console.log(route)//
  console.log(route.params)
    const { diseaseName} = route.params.diseaseName//.split(" ")[-1];
    console.log(route)//
    console.log(route.params)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
          <Image source={arrowBack} style={styles.backIcon}/>
        </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{diseaseName}</Text> 
          </View>


        <Image source={require('../assets/sample2.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>False Smut</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>What it does</Text>
          <Text style={styles.description}>
          False smut causes chalkiness of grains which leads to reduction in grain weight. It also reduces seed germination.
          </Text>
          <Text style={styles.recommendationTitle}>Why and where it occurs</Text>
          <Text style={styles.recommendationText}>
          The disease can occur in areas with high relative humidity (greater than 90%) and temperature ranging from 25 - 35 ºC.

            Rain, high humidity, and soils with high nitrogen content also favors disease development. Wind can spread the fungal spores from plant to plant.
            False smut is visible only after panicle exsertion. It can infect the plant during flowering stage.
          </Text>
          <Text style={styles.identifyTitle}>How to identify</Text>
          <Text style={styles.identifyText}>Check for presence of velvety smut balls on spikelets.
            Spore balls are initially orange and turn greenish black when mature
            Plants infected with false smut have individual rice grain transformed into a mass of spore balls. These spore balls are initially orange, and then turn into greenish black when these mature.
            In most cases, not all spikelets of a panicle are affected, but spikelets neighboring smut balls are often unfilled.
            Individual rice grain transformed into a mass of velvety spores or yellow fruiting bodies
            Growth of velvety spores enclose floral parts
            Immature spores slightly flattened, smooth, yellow, and covered by a membrane
            Growth of spores result to broken membrane
            Mature spores orange and turn yellowish green or greenish black
            Only few grains in a panicle are usually infected and the rest are normal
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