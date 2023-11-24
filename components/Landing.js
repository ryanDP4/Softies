import { useFonts } from 'expo-font';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import imagePath from '../assets/skanin_logo.png';
// import Homepage from './Homepage';

export default function Landing( {navigation} ) {

    const [fontsLoaded, fontError] = useFonts({
        'Ultra-Regular': require('../assets/fonts/ultra/Ultra-Regular.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    }) 
    
    return (
            <TouchableOpacity
            title="SplashScreen"
            onPress={() => navigation.navigate('AreYouA')}
            style={styles.touchable}
            >
                <View style={styles.page} >
                    <View style={styles.imageContainer}>
                        <Image
                            source= {imagePath}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.continueContainer}>
                    <Text style={styles.continueText}>Tap anywhere to continue.</Text>
                    </View>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: '#white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 5,
        paddingTop: 58,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '65%', // Use a percentage of the screen width
        aspectRatio: 1, // Maintain aspect ratio (width:height = 1:1)
        justifyContent: 'center',
        alignItems: 'center'
    },
    appTitleContainer: { 
        
    },  
    appTitle: {
      fontSize: 42,
      marginTop: '1vh',
      fontFamily: 'Ultra-Regular',
      color: 'green'
    },
    appMiniTitle: {
        fontSize: 18,
      
      fontFamily: 'Montserrat-Regular',
      color: 'green'
    },
    continueContainer: {
      flex:1,
    },  
    continueText: {
        fontSize: 13,
        color: '#222222',
    },
    touchable: {
        margin:0,
        flex:1,
        paddding:0
      },
}) 