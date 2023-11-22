import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import focusFrameImg from '../../assets/fframe.png';

const ScanPage = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const goBack = () => {
    // Functionality to go back
  };

  const takePicture = async () => {
    if (cameraRef.current && cameraVisible) {
      const photo = await cameraRef.current.takePictureAsync();
      setSelectedImage(photo.uri);
      setCameraVisible(false); // Close camera after taking picture
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

      if (!result.cancelled && result.assets && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
      } else {
        console.log('Image selection cancelled or no URI found');
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  const handlePressCircleArrow = () => {
    // Placeholder for future functionality
    console.log('Circled arrow pressed');
  };

  if (hasCameraPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>SCAN</Text>
      </View>

      <View style={styles.imageContainer}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Text>Select an image or take a photo</Text>
        )}
      </View>

      <View style={styles.toolbar}>
        <TouchableOpacity onPress={uploadImage} style={styles.uploadButton}>
          <Icon name="photo-library" size={28} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCameraVisible(true)} style={styles.captureButton}>
          <FontAwesome name="camera" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePressCircleArrow} style={styles.circleArrowButton}>
          <FontAwesome name="arrow-right" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={cameraVisible}
        onRequestClose={() => setCameraVisible(false)}
      >
        <Camera style={{ flex: 1 }} ref={cameraRef}>
          <Image source={focusFrameImg} style={styles.focusFrame} />
          <View style={styles.cameraControls}>
            <TouchableOpacity onPress={takePicture} style={styles.cameraButton}>
              <FontAwesome name="camera" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCameraVisible(false)} style={styles.cameraButton}>
              <FontAwesome name="times" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    height: '80%',
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjusted for even spacing
    backgroundColor: '#F8F8F8',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  uploadButton: {
    // Adjusted for left alignment
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#086608",
    marginLeft: 50,
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
  captureButton: {
    // Adjusted for center alignment
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#086608"
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
});

export default ScanPage;