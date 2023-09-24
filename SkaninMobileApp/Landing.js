import { useFonts } from 'expo-font';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
// import Homepage from './Homepage';

export default function Landing( {navigation} ) {
    const imagePath = require('./assets/skaninLanding.png')
    const [fontsLoaded, fontError] = useFonts({
        'Ultra-Regular': require('./assets/fonts/ultra/Ultra-Regular.ttf')
    }) 
    
    return (
            <TouchableOpacity
            title="SplashScreen"
            onPress={() => navigation.navigate('Home Page')}
            style={styles.touchable}
            >
                <View style={styles.page} >
                    <View style={styles.imageContainer}>
                        <Image 
                            source= {imagePath}
                            style={styles.image}
                        />
                        <Text style={styles.appTitle}>SKANIN</Text>
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
        backgroundColor: '#F8F6D6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 5,
        paddingTop: 58,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    image: {
        width: '40vw',
        height: '40vh',
        margin: 0,
        padding: 0,
        marginTop:  '15vh',
        paddingLeft: '60vw',
        paddingRight: '60vw',
    },
    appTitle: {
      fontSize: '42px',
      marginTop: '-4vh',
      fontFamily: 'Ultra-Regular',
      color: '#D49A42'
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