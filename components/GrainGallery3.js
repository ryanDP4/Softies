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


        <Image source={require('../assets/sample3.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>Bacterial Leaf Blight</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>What it does</Text>
          <Text style={styles.description}>
          Damage to Plants: Bacterial leaf blight primarily affects the leaves of rice plants, causing lesions that eventually lead to drying and wilting of the leaves. This damage can lead to significant yield loss in severe cases.
            Spread and Impact: The bacterium spreads primarily through water, infected seeds, and equipment used in rice cultivation. Once established, it can rapidly affect large areas of a rice field, leading to widespread damage.
          </Text>
          <Text style={styles.recommendationTitle}>Why and where it occurs</Text>
          <Text style={styles.recommendationText}>
          Environmental Conditions: The disease is more prevalent in areas with warm and humid climates, which are ideal for the growth and spread of the bacterium. It's commonly found in many rice-growing regions of Asia, Africa, and Latin America.
            Cultivation Practices: Overhead irrigation and continuous flooding of rice fields can facilitate the spread of the bacterium. Dense planting and excessive use of nitrogen fertilizer can also increase the susceptibility of rice plants to this disease.
          </Text>
          <Text style={styles.identifyTitle}>How to identify</Text>
          <Text style={styles.identifyText}>Symptoms on Leaves: The most noticeable symptom is the appearance of yellow to straw-colored lesions on the leaf blades, starting from the leaf tips or edges and progressing downwards.
            Pattern of Spread: The lesions often expand and coalesce, forming larger areas of infected tissue. The leaf margins might roll upwards, and the affected leaves eventually wither and die.
            Additional Signs: In severe cases, the infection can progress to the leaf sheath and even the stem, causing wilting of the entire plant.
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