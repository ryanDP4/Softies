import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { useFonts } from 'expo-font';
import capture from '../../assets/capture.png';
import upload from '../../assets/add_image.png';
import button1 from '../../assets/button-1.png';
import next from '../../assets/next.png';

const ScanPage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf')
  });

  // State for managing camera and selected image
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const cameraRef = useRef(null);

  // Check camera permissions
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  // Reset states when leaving the screen
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setSelectedImage(null);
      setCameraVisible(true);
    });

    return unsubscribe;
  }, [navigation]);

  // Function to handle taking a picture
  const takePicture = async () => {
    if (cameraRef.current && cameraVisible) {
      const photo = await cameraRef.current.takePictureAsync();
      setSelectedImage(photo.uri);
      setCameraVisible(false);
    }
  };

  const uploadImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      // Check if the image selection process was not cancelled
      if (!result.cancelled) {
        setSelectedImage(result.uri); // Set the selected image URI
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  // Render null while loading fonts or if camera permission is null
  if (!fontsLoaded || hasCameraPermission === null) {
    return <View />;
  }
  // Show error if no access to camera
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.goBackButton} onPress={() => navigation.navigate('Homepage')}>
        {/* Replace with your button image source */}
        <Image source={button1} style={styles.buttonImage} />
      </Pressable>

      {cameraVisible && !selectedImage ? (
        <Modal
          animationType="slide"
          transparent={false}
          visible={cameraVisible}
          onRequestClose={() => setCameraVisible(false)}
        >
          <Pressable style={styles.goBackButton} onPress={() => navigation.navigate('Homepage')}>
            {/* Replace with your button image source */}
            <Image source={button1} style={styles.buttonImage} />
          </Pressable>
          <Camera style={{ flex: 1 }} ref={cameraRef}>
            {/* Replace with your focus frame image source */}
            <Image source={require('../../assets/fframe.png')} style={styles.focusFrame} />
          </Camera>
          <View style={styles.toolbar}>
            {/* Replace with your upload and capture image sources */}
            <TouchableOpacity onPress={uploadImage}>
              <Image source={upload} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}>
              <Image source={capture} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : null}

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}

      <View style = {styles.classify}>
          <Pressable style = {styles.nextButton} onPress={() => navigation.navigate('LandingPage')}>
            <Image source = {next} style = {styles.buttonImage}/>
          </Pressable>
          <View style = {styles.textContainer}> 
            <Text style = {styles.textGreen}>Stress Type</Text>
            <Text style = {styles.text}>Biotic/Abiotic Stress</Text>
          </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  circleArrowButton: {
    // Adjusted for right alignment
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#086608",
    marginRight: 50,
  },
  modalButtonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  focusFrame: {
    position: 'absolute',
    alignSelf: 'center',
    top: '20%', // Adjust these values as needed
    width: '80%', // Resize to be smaller than the full view
    height: '60%', // Resize to be smaller than the full view
    resizeMode: 'contain',
  },
  cameraControls: {
    position: 'absolute',
    bottom: 20,
    left: 65,
    right: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cameraButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#086608',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButton: {
    position: 'absolute',
    marginTop: 40,
    left: 10,
    zIndex: 20,
  },
  icon: {
    height: 50,
    width: 50,
  },
  classify: {
    position: 'absolute',
    alignItems: 'center',
    height: 110,
    width: '75%',
    borderRadius: 20,
    backgroundColor: '#D9D9D9', 
    opacity: 0.5,
    bottom: 50, 
    left: '12.5%',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: -90,
    marginTop: -60,
  },
  textGreen: {
    color: '#086608',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    paddingTop: 10,
  },
  goBackButton: {
    position: 'absolute',
    top: 40, 
    left: 15,
    zIndex: 10, 
    width: 40,
    height: 40,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
  },
  nextButton: {
    height: 60, 
    width: 60,
    marginTop: 20,
    marginRight: -180,
    flexDirection: 'row',
  }
});

export default ScanPage;