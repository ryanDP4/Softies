import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

const DiseaseDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>False Smut</Text>
        </View>
        <Image source={require('../assets/disease-image.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Biotic Stress</Text>
          <Text style={styles.classification}>Classification:</Text>
          <Text style={styles.description}>
            False smut causes chalkiness of grains which leads to reduction in grain weight. It also reduces seed germination.
          </Text>
          <Text style={styles.recommendationTitle}>Recommendation:</Text>
          <Text style={styles.recommendationText}>
            The disease affects the early flowering stage of the rice crop when the ovary is destroyed. The second stage of infection occurs when the spikelet nearly reaches maturity.
            These causes chalkiness and can reduce 1,000-grain weight. It also causes a reduction in seed germination of up to 35%. In damp weather, the disease can be severe and losses can reach 25%. In India, a yield loss of 7−75% was observed.

            How to manage:
            Keep the field clean.
            Remove infected seeds, panicles, and plant debris after harvest.
            Reduce humidity levels through alternate wetting and drying (AWD) rather than permanently flooding the fields.
            Where possible, perform conservation tillage and continuous rice cropping.
            Use moderate rates of Nitrogen.
            Use certified seeds.
            Resistant varieties have been reported. Contact your local agriculture office for an up-to-date list of available varieties.
            Treat seeds at 52°C for 10 min.
          </Text>
          {/* ... other texts and icons ... */}
        </View>
      </ScrollView>
      {/* Footer with buttons can be added here */}
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  classification: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  recommendationText: {
    fontSize: 16,
    marginTop: 5,
  },
  // ... other styles for icons and texts ...
});


