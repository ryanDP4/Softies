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
          <Text style={styles.class}>Sheath Blight</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>What it does</Text>
          <Text style={styles.description}>
          Sheath blight is a fungal disease caused by Rhizoctonia solani. Infected leaves senesce or dry out and die more rapidly, young tillers can also be destroyed.
          As a result, the leaf area of the canopy can significantly be reduced by the disease. This reduction in leaf area, along with the diseased-induced senescence of leaves and young infected tillers are the primary causes of yield reduction.
          </Text>
          <Text style={styles.recommendationTitle}>Why and where it occurs</Text>
          <Text style={styles.recommendationText}>
          Sheath blight occurs in areas with high temperature (28 - 32°C), high levels of nitrogen fertilizer, and relative humidity of crop canopy from 85−100%.

          Plants are more vulnerable to sheath blight during the rainy season.
          High seeding rate or close plant spacing, dense canopy, disease in the soil, sclerotia or infection bodies floating on the water, and growing of high yielding improved varieties also favor disease development.
          </Text>
          <Text style={styles.identifyTitle}>How to identify</Text>
          <Text style={styles.identifyText}>Symptoms are usually observed from tillering to milk stage in a rice crop and include the following:
          oval or ellipsoidal greenish gray lesions, usually 1-3 cm long, on the leaf sheath, initially just above the soil or water level in the case of conventionally flooded rice.
          under favorable conditions, these initial lesions multiply and expand to the upper part of the sheaths, the leaves, and then spread to neighboring tillers belonging to different hills (transplanted rice) or plants (direct-seeded rice).
          lesions on the leaves usually have irregular lesions, often with gray-white centers and brown margins as they grow older.
          in subtropical environments, the disease is mostly initiated by sclerotia (up to two million of which can be produced per square meter in a diseased crop).
          In tropical ecosystems, however, the role of sclerotia in initiating the disease is uncertain. In any case, the pathogen does not produce aerially dispersed spores; its dispersal is essentially dependent on hyphae running on plant tissues and producing new infections
          Sheath blight has symptoms similar to stem rot and stemborer infestation. To confirm the cause of disease, check for irregular lesions usually found on the leaf sheaths (initially water-soaked to greenish gray and later becomes grayish white with brown margin). Also check for presence of sclerotia.</Text>
        
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