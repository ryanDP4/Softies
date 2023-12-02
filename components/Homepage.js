import React, { useRef } from 'react';
import { StyleSheet, View, Text, Animated, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { ImageHeaderScrollView } from 'react-native-image-header-scroll-view';
import { useNavigation } from '@react-navigation/native';
import GalleryItem from './GalleryItem';
import GrainGallery from './GrainGallery';

const BANNER_HEIGHT = 400;

// ... (imports)    

const Homepage = () => {
    const navigation = useNavigation();
    const scrollA = useRef(new Animated.Value(0)).current;
    const homebannerIMG = require('../assets/homebanner.png');
    const sampleIMG1 = require('../assets/sampleIMG1.png');
    const sampleIMG2 = require('../assets/sampleIMG2.png');
    const sampleIMG3 = require('../assets/sampleIMG3.png');
    const [fontsLoaded] = useFonts({
      'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
    });
  
    if (!fontsLoaded) {
      return null;
    }

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
  
    return (
      <View style={styles.container}>
        <ImageHeaderScrollView
          maxHeight={BANNER_HEIGHT}
          minHeight={100}
          renderHeader={() => (
            <Animated.Image
              style={{ width: '100%', height: BANNER_HEIGHT }}
              source={homebannerIMG}
            />
          )}
        >
          <View style={styles.TextView}>
            <View style={styles.header}>
              <View style={styles.titleCon}>
                <Text style={styles.title}>Recent Scans</Text>
                <View style={styles.lineUnder}></View>
              </View>
              <TouchableOpacity
                    style={styles.ViewButton}
                    onPress={() => navigation.navigate('RecentScans')}
                > 
                <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>

            </View>
  
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.imageScrollView}
            >
              <TouchableOpacity onPress={() => navigation.navigate('RecentScans1', {diseaseName:'False Smut'})}>
                <Image source={sampleIMG1} style={styles.imageStyle} />
              </TouchableOpacity>
  
              <TouchableOpacity onPress={() => navigation.navigate('RecentScans2' , {diseaseName: 'Green Leaf Hopper'})}>
                <Image source={sampleIMG2} style={styles.imageStyle} />
              </TouchableOpacity>
  
              <TouchableOpacity onPress={() => navigation.navigate('RecentScans3', {diseaseName: 'Blast'})}>
                <Image source={sampleIMG3} style={styles.imageStyle} />
              </TouchableOpacity>
            </ScrollView>
  
            <View style={styles.header}>
              <View style={styles.titleCon}>
                <Text style={styles.title}>Grain Gallery</Text>
                <View style={styles.lineUnder}></View>
              </View>
              <TouchableOpacity
                  style={styles.ViewButton}
                  onPress={() => navigation.navigate('GrainGallery')}
                > 
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.listContainer}>
            {[1, 2, 3, 4].map((index) => (
              <GalleryItem
                key={index}
                onPress={() => navigation.navigate('Details')}
                source={sampleImages[index % sampleImages.length]}
                style={styles.imageContainer}
              />
              ))}
            </View>
          </View>
        </ImageHeaderScrollView>
      </View>
    );
  };
  
  

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -10,
    },
    titleCon: {
        marginLeft: 10
    },
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'Montserrat-Regular',
    },
    TextView: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: 10
    },
    banner: (scrollA) => ({
        height: BANNER_HEIGHT,
        width: '100%',
        transform: [{ translateY: scrollA }],
    }),
    lineUnder:{
        height: 3,
        backgroundColor: 'green',
        width: 70,
        marginTop: 1,
        marginLeft: 1,
    },
    ViewButton: {
        backgroundColor: 'transparent', 
    },
    viewAllText: {
        color: 'black', 
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    LGstyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 100,
        marginTop: 220,
        top: 0
    },
    imageScrollView: {
        height: 175,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,

    },
    imageStyle: {
        width: 150, 
        height: 150, 
        margin: 10,
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 10,
        overflow: 'hidden',
    },
    listContainer: {
      flexDirection: 'column',
      marginHorizontal: 20,
      marginTop: 10,
    },
    imageContainer: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      flex: 1,
      width: '100%',
      marginTop: 10,
      marginBottom: 10,
    },
});

export default Homepage;