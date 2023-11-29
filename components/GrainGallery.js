import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'; 
const arrowBack = require('../assets/back.png');
import GalleryItem from './GalleryItem';
const sampleImages = [
  require('../assets/Grain-Gallery/1.png'),
  require('../assets/Grain-Gallery/2.png'),
  require('../assets/Grain-Gallery/3.png'),
  require('../assets/Grain-Gallery/4.png'),
  require('../assets/Grain-Gallery/5.png'),
  require('../assets/Grain-Gallery/6.png'),
  require('../assets/Grain-Gallery/7.png'),
  require('../assets/Grain-Gallery/8.png'),
  require('../assets/Grain-Gallery/9.png'),
  require('../assets/Grain-Gallery/10.png'),
];

const previousArrow = require('../assets/previousArrow.png');
const nextArrow = require('../assets/nextArrow.png');

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity onPress={() => onPageChange(currentPage - 1)} disabled={currentPage === 0}>
        <Image source={previousArrow} style={currentPage === 0 ? styles.arrowDisabled : styles.arrow}/>
      </TouchableOpacity>
      {pages.map(number => (
        <TouchableOpacity
          key={number}
          onPress={() => onPageChange(number - 1)}
          style={[styles.pageNumber, currentPage === number - 1 && styles.pageNumberSelected]}>
          <Text style={styles.pageText}>{number}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages - 1}>
        <Image source={nextArrow} style={currentPage === totalPages - 1 ? styles.arrowDisabled : styles.arrow}/>
      </TouchableOpacity>
    </View>
  );
};

const diseases = [
  { name: 'Blast', type: 'Biotic Stress' },
  { name: 'Green Leaf Hopper', type: 'Biotic Stress' },
  { name: 'Brown Leaf Hopper', type: 'Biotic Stress' },
  { name: 'Sheath Blight', type: 'Biotic Stress' },
  { name: 'False Smut', type: 'Biotic Stress' },
  { name: 'Tungro', type: 'Biotic Stress' },
  { name: 'Bacterial Leaf Blight', type: 'Biotic Stress' },
  { name: 'Yellow Stem Borer', type: 'Biotic Stress' },
  { name: 'Stem Borer', type: 'Biotic Stress' },
  { name: 'Healthy', type: 'Normal Condition' },
];


export default function GrainGallery({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(diseases.length / itemsPerPage);

  const onPageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = diseases.slice(startIndex, endIndex);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
          <Image source={arrowBack} style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Grain Gallery</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {itemsToDisplay.map((disease, index) => (
          <View key={index} style={styles.listItem}>
            <Image source={sampleImages[index % sampleImages.length]} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{disease.name}</Text>
              <Text style={styles.type}>{disease.type}</Text>
            </View>
          </View>
        ))}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Assuming white background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50, // Adjust this value to ensure the header is correctly positioned
    paddingHorizontal: 10, // Side padding
    backgroundColor: '#FFFFFF', // Header background color
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginLeft: 10, // Space between the back button and title
    marginTop: 60
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  goBackButton: {
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
  pageContainer: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginTop: 5,
},
imageContainer: {
    borderColor: 'black',  // Set border color to black
    borderWidth: 1, 
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#D7DFC9',
},
imgStyle: {
    width: 100, // Adjusted width to take full width of the container
    height: 100,
},
  icon: {
    width: 20,
    height: 20,
  },
  goBackButton: {
    position: 'absolute',
    marginTop: 30,
    left: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  pageNumber: {
    margin: 5,
    width: 40, // Update this based on your design preference
    height: 40, // Update this based on your design preference
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5, // This will give you the box shape with a radius
    backgroundColor: '#e0e0e0',
  },
  pageNumberSelected: {
    borderColor: '#4caf50',
    backgroundColor: '#4caf50', // Active page number color
  },
  pageText: {
    color: '#000',
    fontSize: 16,
  },
  arrow: {
    width: 30, // Set your dimensions
    height: 30, // Set your dimensions
    resizeMode: 'contain',
  },
  arrowDisabled: {
    width: 30, // Set your dimensions
    height: 30, // Set your dimensions
    resizeMode: 'contain',
    opacity: 0.3, // Dim the arrow to indicate it's disabled
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#ffffff', // white background for the container
    borderRadius: 20, // rounded corners
    marginVertical: 8, // space between items
    marginHorizontal: 16, // space from the sides
    overflow: 'hidden', // keeps the child views inside the container
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // shadow for Android
  },
  image: {
    width: 90, // smaller width
    height: 90, // adjusted for square aspect ratio
    borderTopLeftRadius: 20, // rounded corners on the image
    borderBottomLeftRadius: 20,
    backgroundColor: '#D7DFC9', // background color in case the image doesn't cover the entire area
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#E8F5E9', // light green background
    paddingVertical: 20, // padding top and bottom
    paddingHorizontal: 16, // padding left and right
  },
  name: {
    color: '#000', // black color for the text
    fontSize: 18, // larger font size
    fontWeight: 'bold', // bold font weight
  },
  type: {
    color: '#388E3C', // dark green color
    fontSize: 14, // smaller font size
  },

});
