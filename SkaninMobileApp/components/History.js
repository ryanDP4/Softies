import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'; 
import BigHeadline from '../components/Profile/BigHeadline';
import home from '../assets/home.svg';
import scan from '../assets/scan.svg';
import history from '../assets/history.svg';
import userProfile from '../assets/user-profile.svg';

export default function History({ navigation }) {
    const sampleIMG1 = require('../assets/sampleIMG1.svg');
  return (
    <>
      <View style={styles.pageContainer}>
        <BigHeadline Headline={"History"}></BigHeadline>
      </View>

      <View style={styles.listContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Landing')}
                                style={styles.imageContainer} // Adjusted style
                            >
                                <Image
                                    source={sampleIMG1}
                                    style={styles.imgStyle} // Added style
                                />

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Landing')}
                                style={styles.imageContainer} // Adjusted style
                            >
                                <Image
                                    source={sampleIMG1}
                                    style={styles.imgStyle} // Added style
                                />

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Landing')}
                                style={styles.imageContainer} // Adjusted style
                            >
                                <Image
                                    source={sampleIMG1}
                                    style={styles.imgStyle} // Added style
                                />

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Landing')}
                                style={styles.imageContainer} // Adjusted style
                            >
                                <Image
                                    source={sampleIMG1}
                                    style={styles.imgStyle} // Added style
                                />

                            </TouchableOpacity>

                            
                        </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <Image source={home} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Classification Page')}>
          <Image source={scan} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('History Page')}>
          <Image source={history} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('User Profile')}>
          <Image source={userProfile} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 10
},
imgStyle: {
    width: 100, // Adjusted width to take full width of the container
    height: 100,
},
  icon: {
    width: 20,
    height: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    // borderTopRadius: 10,
    bottom: 0,
    width: '100%',
    height: '3%',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
