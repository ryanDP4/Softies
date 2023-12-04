import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const arrowBack = require('../assets/back.png');
const RecentScans1 = ({ navigation, route }) => {
    const { diseaseName} = route.params.diseaseName
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
          <Image source={arrowBack} style={styles.backIcon}/>
        </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{diseaseName}</Text> 
          </View>


        <Image source={require('../assets/sampleIMG3.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>Blast</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>What it does</Text>
          <Text style={styles.description}>
          Blast is caused by the fungus Magnaporthe oryzae. It can affect all above ground parts of a rice plant: leaf, collar, node, neck, parts of panicle, and sometimes leaf sheath.
          </Text>
          <Text style={styles.recommendationTitle}>Why and where it occurs</Text>
          <Text style={styles.recommendationText}>
          Blast can occur wherever blast spores are present.

            It occurs in areas with low soil moisture, frequent and prolonged periods of rain shower, and cool temperature in the daytime. In upland rice, large day-night temperature differences that cause dew formation on leaves and overall cooler temperatures favor the development of the disease.

            Rice can have blast in all growth stages. However, leaf blast incidence tends to lessen as plants mature and develop adult plant resistance to the disease.
            </Text>        
          <Text style={styles.identifyTitle}>How to identify</Text>
          <Text style={styles.identifyText}>Check the leaf and collar for lesions:

            Initial symptoms appear as white to gray-green lesions or spots, with dark green borders.
            Older lesions on the leaves are elliptical or spindle-shaped and whitish to gray centers with red to brownish or necrotic border.
            Check for other symptoms:

            Some resemble diamond shape, wide in the center and pointed toward either ends.
            Lesions can enlarge and coalesce, growing together, to kill the entire leaves.
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