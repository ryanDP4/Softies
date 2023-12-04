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


        <Image source={require('../assets/sample1.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>Yellow Stem Borer</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>What it does</Text>
          <Text style={styles.description}>
          The yellow stem borer is a type of rice stem borer. It primarily infests and damages rice plants at their larval stage. The larvae bore into the rice plant stems and feed on the inner tissues, causing significant damage. This feeding activity weakens the rice plants, leading to stunted growth, reduced grain yield, and sometimes even plant death. Severe infestations can result in crop losses and economic damage to rice farmers.
          </Text>
          <Text style={styles.recommendationTitle}>Why and where it occurs</Text>
          <Text style={styles.recommendationText}>
          The yellow stem borer is found in various rice-growing regions of Asia, including countries like India, Bangladesh, Thailand, and the Philippines. It is more prevalent in areas with a warm and humid climate, which are conducive to its development. The insect lays its eggs on rice plants, and the emerging larvae tunnel into the stems to feed. It's a significant pest in r
            Rice can have blast in all growth stages. However, leaf blast incidence tends to lessen as plants mature and develop adult plant resistance to the disease.
            </Text>        
          <Text style={styles.identifyTitle}>How to identify</Text>
          <Text style={styles.identifyText}>Identifying the yellow stem borer can be challenging because the adults are small, inconspicuous, and similar in appearance to other moths. However, you can identify them through their life stages:

            Egg: Yellow stem borer eggs are tiny, oval-shaped, and typically laid singly on the rice leaves near the waterline. They are initially creamy white and turn yellow as they mature.

            Larva (Caterpillar): The larval stage is the most damaging. Yellow stem borer larvae are cylindrical, cream-colored with a brown head, and have distinct longitudinal stripes. They can be found inside the rice stems, feeding on the plant tissues.

            Pupa: The pupal stage occurs inside the rice stem. The pupa is yellowish-brown and resembles a cocoon.

            Adult (Moth): The adult yellow stem borer is a small, slender moth with a wingspan of about 2 cm. It has a pale yellowish-brown color with a characteristic dark, zigzag line across its wings. The wings are fringed, and the moth is typically active during the evening.
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