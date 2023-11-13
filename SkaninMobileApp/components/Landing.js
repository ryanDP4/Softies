import { useFonts } from 'expo-font';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
// import Homepage from './Homepage';

export default function Landing( {navigation} ) {
    const imagePath = require('../assets/skaninLanding.svg')
    const [fontsLoaded, fontError] = useFonts({
        'Ultra-Regular': require('../assets/fonts/ultra/Ultra-Regular.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
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
                        <Text style={styles.appTitle}>SKANIN</Text>
                        <Text style={styles.appMiniTitle}>AgriScan</Text>
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
        backgroundColor: '#FFF',
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
    appTitle: {
      fontSize: '42px',
      marginTop: '1vh',
      fontFamily: 'Ultra-Regular',
      color: 'green'
    },
    appMiniTitle: {
        fontSize: '18px',
      
      fontFamily: 'Montserrat-Regular',
      color: 'green'
    },
    continueContainer: {
      flex:1,
    },  
    continueText: {
        fontFamily: 'mosterratt-medium',
        fontSize: '13px',
        color: '#222222',
    },
    touchable: {
        margin:0,
        flex:1,
        paddding:0
      },
}) 