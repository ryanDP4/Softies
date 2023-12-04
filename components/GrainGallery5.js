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


        <Image source={require('../assets/sample4.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>Stem Borer</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>What it does</Text>
          <Text style={styles.description}>
          Stem borers can destroy rice at any stage of the plant from seedling to maturity.

            They feed upon tillers and causes deadhearts or drying of the central tiller, during vegetative stage; and causes whiteheads at reproductive stage.
          </Text>
          <Text style={styles.recommendationTitle}>Why and where it occurs</Text>
          <Text style={styles.recommendationText}>
          The stem borer larvae bore at the base of the plants during the vegetative stage. On older plants, they bore through the upper nodes and feed toward the base.

            The yellow stem borer is a pest of deepwater rice. It is found in aquatic environments where there is continuous flooding. Second instar larvae enclose themselves in body leaf wrappings to make tubes and detach themselves from the leaf and falls onto the water surface. They attach themselves to the tiller and bore into the stem.

            Striped stem borer is most abundant in temperate countries and in non-flooded areas. Their final instars remain dormant in temperate areas during winter.

            The pink stem borer is found in upland rice, which is grown near sugarcane or related grasses. The presence of alternate hosts encourages the pink stem borer to develop, multiply and survive during winter or dry season. Unlike other species of stem borers, the pink stem borer lay bare eggs between the leaf sheath and the stem.

            High nitrogenous field favors population buildup of the stem borers. Fields planted later favors more damage by the insect pests that have built up in fields that have been planted earlier. Stubble that remains in the field can harbor stem borer larvae and or pupae.
          </Text>
          <Text style={styles.identifyTitle}>How to identify</Text>
          <Text style={styles.identifyText}>Check the field for the following damage symptoms:

            Deadhearts or dead tillers that can be easily pulled from the base during the vegetative stages
            Whiteheads during reproductive stage where the emerging panicles are whitish and unfilled or empty
            Tiny holes on the stems and tillers
            Frass or fecal matters inside the damaged stems
            Deadhearts and whiteheads symptoms may sometimes be confused with damages caused by rats, neck blast, and black bug diseases.

            To confirm stem borer damage, visually inspect rice crop for deadhearts in the vegetative stages and whiteheads in reproductive stages. Stems can be pulled and dissected for larvae and pupae for confirmation of stem borer damage.
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