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


        <Image source={require('../assets/sampleIMG2.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>Green Leaf Hopper</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>Classification:</Text>
          <Text style={styles.description}>
            Green leafhoppers are the most common leafhoppers in rice fields and are primarily critical because they spread the viral disease tungro. Both nymphs and adults feed by extracting plant sap with their needle-shaped mouthparts.
          </Text>
          <Text style={styles.recommendationTitle}>Recommendation:</Text>
          <Text style={styles.recommendationText}>
          Rice fields infested by GLH can have tungro, yellow dwarf, yellow-orange leaf, and transitory yellowing diseases. Green leafhoppers are important pests. They are vectors of viral diseases such as tungro, yellow dwarf, yellow-orange leaf, transitory yellowing, and dwarf.  Tungro infected crops may sometimes be confused with nitrogen deficiency or iron toxicity or acid soils. 

            To confirm the cause of the problem, check for virus infected plants in the fields, and the presence of the insect:
            white or pale yellow eggs inside leaf sheaths or midribs
            yellow or pale green nymphs with or without black markings
            pale green adults with or without black markings feeding on upper parts of the crop

            How to Manage:
            Use GLH-resistant and tungro-resistant varieties. Contact your local agriculture office for an up-to-date list of available varieties.
            Reduce the number of rice crops to two per year and synchronized crop establishment across farms reduces leafhoppers and other insect vectors.
            Transplant older seedlings (less than 3 weeks) to reduce viral disease susceptibility transmitted by leafhoppers.
            Plant early within a given planting period, particularly in the dry season to reduce the risk of insect-vector disease.
            Avoid planting during the peak of GLH activity (shown by historical records) to avoid infestation. Light traps can be used to show GLH numbers.
            Apply nitrogen as needed (e.g., using the Leaf Color Chart) to avoid contributing to population outbreaks by applying too much nitrogen, or hindering plant recovery from planthopper damage by applying insufficient nitrogen.
            Control weeds in the field and on the bunds to remove the preferred grassy hosts of GLH and promotes crop vigor.
            Perform crop rotation with a non-rice crop during the dry season to decrease alternate hosts for diseases.
            Intercrop upland rice with soybean to reduce the incidence of leafhoppers on rice.
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
  // ... other styles for icons and texts ...
});


export default RecentScans1; // Export the component