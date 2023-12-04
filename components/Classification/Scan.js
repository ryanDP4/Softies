import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import capture from '../../assets/capture.png';
import upload from '../../assets/add_image.png';
import button1 from '../../assets/button-1.png';
import next from '../../assets/next.png';

const ScanPage = ({ navigation }) => {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cameraRef = useRef(null);
  
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setSelectedImage(null);
      setCameraVisible(true);
    });

    return unsubscribe;
  }, [navigation]);

  const takePicture = async () => {
    if (cameraRef.current && cameraVisible) {
      const photo = await cameraRef.current.takePictureAsync();
      await fetchClassification(photo.uri)
      await setSelectedImage(photo.uri);
      setCameraVisible(false);
      
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        // console.log(result.assets.uri)
        console.log(result.assets[0].uri)
        URI = result.assets[0].uri
        await fetchClassification(URI);
        await setSelectedImage(URI);
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  // const uploadPhoto = async (imageUri) => {
  //   try {
  //     // Convert the image to base64
  //     const base64Image = await convertImageToBase64(imageUri);
  
  //     // Make a POST request to your API
  //     const response = await fetch('YOUR_API_ENDPOINT', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ image: base64Image }),
  //     });
  
  //     // Handle the response from the server
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error('Error uploading image: ', error);
  //   }
  // };

  const fetchClassification = async (imageUri) => {
    try {
      const base64Image = await convertImageToBase64(imageUri)
      console.log("LOADING LOADING LOADING...")
      // console.log(base64Image)
      const response = await fetch('https://softies-backend-production.up.railway.app/api/recommendation/skan', { 
      method: 'POST',
      body: JSON.stringify({
          "image":base64Image,
        }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
      console.log("workin2")
      const result = await response.json();
      // result assign to state
      console.log("workin3")
      console.log(result)
    } catch (error) {
      // console.log(error)
    }
  };
  const convertImageToBase64 = async (imageUri) => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const base64Image = await convertBlobToBase64(blob);
    return base64Image;
  };
  
  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  useEffect(() => {
        console.log(selectedImage)
        fetchClassification()})

//       }, [selectedImage]);


  const handleNextPress = () => {
    setIsModalVisible(true);
  };

  if (hasCameraPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Image source={button1} style={styles.buttonImage} />
      </Pressable>

      {cameraVisible && !selectedImage ? (
        <Modal
          animationType="slide"
          transparent={false}
          visible={cameraVisible}
          onRequestClose={() => setCameraVisible(false)}
        >
          <Pressable style={styles.goBackButton} onPress={() => navigation.goBack()}>
            <Image source={button1} style={styles.buttonImage} />
          </Pressable>
          <Camera style={{ flex: 1 }} ref={cameraRef}>
            <Image source={require('../../assets/fframe.png')} style={styles.focusFrame} />
          </Camera>
          <View style={styles.toolbar}>
            <TouchableOpacity onPress={pickImage}>
              <Image source={upload} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}>
              <Image source={capture} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : null}

      {selectedImage && (
        <>
          <Image source={{ uri: selectedImage }} style={styles.image} />
          <View style={styles.classify}>
            <Pressable style={styles.nextButton} onPress={handleNextPress}>
              <Image source={next} style={styles.buttonImage} />
            </Pressable>
            <View style={styles.textContainer}>
              <Text style={styles.textGreen}>Stress Type</Text>
              <Text style={styles.text}>Biotic/Abiotic Stress</Text>
            </View>
          </View>
        </>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Stress Type</Text>
            <Text style={styles.modalTitle2}>Biotic Stress</Text>
            <Text style={styles.modalSubtitle}>Recommendations:</Text>
            <Text style={styles.modalContent}>
              1. Plant Resistant Varieties: Use resistant rice varieties; consult local agricultural authorities for updated lists.{"\n"}
              2. Crop Management Measures:{"\n"}
              • Adjust Planting Time: Sow seeds early in the rainy season.{"\n"}
              • Nitrogen Fertilizer Application: Split into multiple treatments to avoid excessive use.{"\n"}
              • Field Flooding: Flood the field as frequently as possible.{"\n"}
              • Silicon Fertilizers: Apply to silicon-deficient soils. Consider cost-effective sources like rice genotypes high in silicon. Avoid using infected straw as a silicon source.{"\n"}
              • Systemic Fungicides: Use judiciously, such as triazoles and strobilurins, particularly during heading stage for effective control.
            </Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

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
    top: '20%', 
    width: '80%', 
    height: '60%', 
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center', 
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: '#049B04',
    fontWeight: 'bold'
  },
  modalContent: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    textAlign: 'left', 
    marginBottom: 10
  },
  buttonClose: {
    position: 'absolute', 
    right: 10, 
    top: 10, 
    backgroundColor: '#049B04', 
    borderRadius: 20, 
    padding: 10, 
    elevation: 2, 
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalSubtitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  modalTitle2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default ScanPage;
