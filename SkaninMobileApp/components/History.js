import { StyleSheet, View, Image, Text, TouchableOpacity, Pressable } from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';

export default function History({ navigation }) {
    const sampleIMG1 = require('../assets/sampleIMG1.svg');
    const [fontsLoaded] = useFonts({
      'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
  });

  if (!fontsLoaded) {
      return null;
  }
  return (
    <>
    <View style = {styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
          <Icon name="arrow-back" size={28} color="#000" /> 
        </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>History</Text>
      </View>

      <View style={styles.listContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LandingPage')}
          style={styles.imageContainer}>
            <Image
              source={sampleIMG1}
              style={styles.imgStyle} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('LandingPage')}
          style={styles.imageContainer}>          
            <Image
              source={sampleIMG1}
               style={styles.imgStyle}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('LandingPage')}
          style={styles.imageContainer} >
            <Image
              source={sampleIMG1}
              style={styles.imgStyle}
            />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('LandingPage')}
          style={styles.imageContainer}>
          <Image
            source={sampleIMG1}
             style={styles.imgStyle} />

        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  header: { 
    marginLeft: 5, 
    marginTop: 100,
  },
  headerText: {
    color: '#000',
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 26,
    padding: 20,
    fontFamily: 'Montserrat-Regular',
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
    marginTop: 50,
    left: 10,
  },
});
