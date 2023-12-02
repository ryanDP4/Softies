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


        <Image source={require('../assets/sampleIMG5.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.class}>Brown Plant Hopper</Text>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>Classification:</Text>
          <Text style={styles.description}>
          Two species of planthopper infest rice. These are the brown planthopper (BPH), Nilaparvata lugens (Stal); and the whitebacked planthopper (WBPH), Sogatella furcifera (Horvath).
          </Text>
          <Text style={styles.recommendationTitle}>Recommendation:</Text>
          <Text style={styles.recommendationText}>
          The feeding damage caused by planthoppers results in the yellowing of the plants. At high population density, hopperburn or complete drying of the plants is observed. At this level, crop loss may be 100%.

            In field conditions, plants nearing maturity can have hopperburns if infested with about 400−500 BPH nymphs. In the 1970s and 1980s, BPH was considered a threat to rice production in Asia. BPH also transmit Rice Ragged Stunt and Rice Grassy Stunt viruses..

            At a population density of 400−500 nymphs or 200 adults per plant, WBPH can cause complete loss of rice plants. Outbreaks of WBPH were reported in Pakistan in 1978, Malaysia in 1979, and India in 1982, 1984, and 1985.

            How to manage:
            Outbreaks result from pesticides destroying natural enemies (BPH eggs hatch unchecked, and surviving BPH quickly build-up populations to damaging levels), or when longwinged planthoppers are being carried in by the wind.

            To prevent outbreaks of planthopper:
            Remove weeds from the field and surrounding areas.
            Avoid indiscriminate use of insecticide, which destroys natural enemies.
            Use a resistant variety. Contact your local agriculture office for an up-to-date list of available varities.
            Critical numbers: At a density of 1 BPH/stem or less there is still time to act in case the numbers increase.
            Look for BPH daily in the seedbed, or weekly in the field, on stems and the water surface. Check each side of the seed bed (or direct-seeded fields). For older rice plants, grasp the plant, bend it over slightly, and gently tap it near the base to see if planthoppers fall onto the water surface. For transplanted rice look at bases of 10 to 20 hills as you cross the field diagonally. There is no need to scout for BPH or WBPH beyond the milk stage.
            Use light traps (e.g., an electric bulb or kerosene lamp near a light colored wall or over a pan of water) at night when rice is prone to planthopper attack. Do not place lights near seedbeds or fields. If the light trap is inundated with hundreds of BPH, it's a signal to check your seedbed or field immediately; then scout every day for the next few weeks. If farmers monitor on a daily basis anyway, then a light trap is unnecessary.

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