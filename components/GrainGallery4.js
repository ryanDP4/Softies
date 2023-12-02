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


        <Image source={require('../assets/sample4.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>Tungro</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>What it does</Text>
          <Text style={styles.description}>
          Rice tungro disease is caused by the combination of two viruses, which are transmitted by leafhoppers. It causes leaf discoloration, stunted growth, reduced tiller numbers and sterile or partly filled grains.
            Tungro infects cultivated rice, some wild rice relatives and other grassy weeds commonly found in rice paddies.
          </Text>
          <Text style={styles.recommendationTitle}>Why and where it occurs</Text>
          <Text style={styles.recommendationText}>
          Tungro disease viruses are transmitted from one plant to another by leafhoppers that feed on tungro-infected plants. The most efficient vector is the green leafhopper.
            Leafhoppers can acquire the viruses from any part of the infected plant by feeding on it, even for a short time. It can, then, immediately transmit the viruses to other plants within 5 - 7 days. The viruses do not remain in the leafhopper's body unless it feeds again on an infected plant and re-acquires the viruses.
            Tungro infection can occur during all growth stages of the rice plant. It is most frequently seen during the vegetative phase. Plants are most vulnerable at tillering stage.
            Tungro incidence depends on the availability of the virus sources and vector population. Other than infected rice plants in the farmer's field, other primary sources for tungro, include:
            stubble of previous crops
            new growth from infected stubbles that had not been properly plowed under and harrowed effectively
            volunteer rice
            infected plants in nearby rice fields
            Seedlings raised in nurseries or seedbeds can also be infected with Tungro prior to transplanting and can be a primary source of virus.
            Transplanting seedlings from nurseries in tungro-infected areas has also shown to increase infection rates in the field, particularly, in cases where seedbed is in a tungro-endemic area or when the nursery duration is 5 - 6 weeks.
            However, this is not believed to be a very strong mechanism in initiating epidemics, because the competitiveness of tungro-infected seedlings is low; they can die rapidly after transplanting.
          </Text>
          <Text style={styles.identifyTitle}>How to identify</Text>
          <Text style={styles.identifyText}>Symptoms are usually observed from tillering to milk stage in a rice crop and include the following:
            oval or ellipsoidal greenish gray lesions, usually 1-3 cm long, on the leaf sheath, initially just above the soil or water level in the case of conventionally flooded rice.
            under favorable conditions, these initial lesions multiply and expand to the upper part of the sheaths, the leaves, and then spread to neighboring tillers belonging to different hills (transplanted rice) or plants (direct-seeded rice).
            lesions on the leaves usually have irregular lesions, often with gray-white centers and brown margins as they grow older.
            in subtropical environments, the disease is mostly initiated by sclerotia (up to two million of which can be produced per square meter in a diseased crop).
            In tropical ecosystems, however, the role of sclerotia in initiating the disease is uncertain. In any case, the pathogen does not produce aerially dispersed spores; its dispersal is essentially dependent on hyphae running on plant tissues and producing new infections
            Sheath blight has symptoms similar to stem rot and stemborer infestation. To confirm the cause of disease, check for irregular lesions usually found on the leaf sheaths (initially water-soaked to greenish gray and later becomes grayish white with brown margin). Also check for presence of sclerotia.
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