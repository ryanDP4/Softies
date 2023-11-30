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


        <Image source={require('../assets/sampleIMG4.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>Storm Borer</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>Classification:</Text>
          <Text style={styles.description}>
          Six species of stemborer attack rice. These are the yellow stemborer, white stemborer, striped stemborer, gold-fringed stemborer, dark-headed striped stemborer, and the pink stemborer
          </Text>
          <Text style={styles.recommendationTitle}>Recommendation:</Text>
          <Text style={styles.recommendationText}>
          Excessive boring through the sheath can destroy the crop. Its damage can reduce the number of reproductive tillers. At late infection, plants develop whiteheads.

          Yellow stemborer damage can lead to about 20% yield loss in early planted rice crops, and 80% in late-planted crops.
          White stemborer is an important pest in rainfed wetland rice. It can cause outbreaks and destroy rice fields.
          Striped stemborer is one of the most important insect pests in Asia. Its damage can be as high as 100% when severe.
          Gold-fringed stemborer can cause yield loss of about 30%.

          How to manage
          Use resistant varieties
          At seedbed and transplanting, handpick and destroy egg masses
          Raise level of irrigation water periodically to submerge the eggs deposited on the lower parts of the plant
          Before transplanting, cut the leaf-top to reduce carry-over of eggs from the seedbed to the field
          Ensure proper timing of planting and synchronous planting, harvest crops at ground level to remove the larvae in stubble, remove stubble and volunteer rice, plow and flood the field
          Encourage biological control agents: braconid, eulophid, mymarid, scelionid, chalcid, pteromalid and trichogrammatid wasps, ants, lady beetles, staphylinid beetles, gryllid, green meadow grasshopper, and mirid, phorid and platystomatid flies, bethylid, braconid, elasmid, eulophid, eurytomid and ichneumonid wasps, carabid and lady bird beetles, chloropid fly, gerrid and pentatomid bugs, ants, and mites, earwigs, bird, asilid fly, vespid wasp, dragonflies, damselflies, and spiders
          Bacteria and fungi also infect the larvae: mermithid nematode, chalcid, elasmid and eulophid
          Apply nitrogen fertilizer in split following the recommended rate and time of application.
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