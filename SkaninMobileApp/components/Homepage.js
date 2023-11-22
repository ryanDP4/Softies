import React, { useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Animated, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { ImageHeaderScrollView } from 'react-native-image-header-scroll-view';
import home from '../assets/home.svg';
import scan from '../assets/scan.svg';
import history from '../assets/history.svg';
import userProfile from '../assets/user-profile.svg';

const BANNER_HEIGHT = 400;

const Homepage = ({navigation}) => {
    const scrollA = useRef(new Animated.Value(0)).current;
    const homebannerIMG = require('../assets/homebanner.png');
    const sampleIMG1 = require('../assets/sampleIMG1.svg');
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
    });

    if (!fontsLoaded) {                                                                                                                                                                                                                                                                                           
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageHeaderScrollView
                maxHeight={BANNER_HEIGHT}
                minHeight={100}
                renderHeader={() => (
                    <Animated.Image
                        style={styles.banner(scrollA)}
                        width="100%"
                        height={BANNER_HEIGHT}
                        source={homebannerIMG}
                    />
                )}
                
            >
                    <View style={styles.TextView}>
                        <View style={styles.header}>
                            <View style={{ width: '75%' }}>
                                <Text style={styles.title}>Recent Scans</Text>
                                <View style={styles.lineUnder}></View>
                            </View>
                            <TouchableOpacity style={styles.ViewButton}>
                                <Text style={styles.viewAllText}>View all</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.imageScrollView} // Adjusted style
                        >
                            {/* <LinearGradient
                                colors={["rgba(0, 164, 109, 0.09)", "transparent"]}
                                style={styles.LGstyle}
                            /> */}
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Landing')}
                                // style={styles.imageContainer} // Adjusted style
                            >
                                <Image
                                    source={sampleIMG1}
                                    style={styles.imageStyle} // Added style
                                />
                                
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Landing')}
                                // style={styles.imageContainer} // Adjusted style
                            >
                                <Image
                                    source={sampleIMG1}
                                    style={styles.imageStyle} // Added style
                                />
                                
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Landing')}
                                // style={styles.imageContainer} // Adjusted style
                            >
                                <Image
                                    source={sampleIMG1}
                                    style={styles.imageStyle} // Added style
                                />
                                
                            </TouchableOpacity>


                        </ScrollView>

                        <View style={styles.header}>
                            <View style={{ width: '75%' }}>
                                <Text style={styles.title}>Stress Varieties</Text>
                                <View style={styles.lineUnder}></View>
                            </View>
                            <TouchableOpacity style={styles.ViewButton}>
                                <Text style={styles.viewAllText}>View all</Text>
                            </TouchableOpacity>
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

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Landing')}
                                style={styles.imageContainer} // Adjusted style
                            >
                                <Image
                                    source={sampleIMG1}
                                    style={styles.imgStyle} // Added style
                                />

                            </TouchableOpacity>

                            {/* <TouchableOpacity
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

                            </TouchableOpacity> */}
                        </View>
                    </View>
            </ImageHeaderScrollView>
                  {/* Footer with icon buttons */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
                    <Image source={home} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Scan Page')}>
                    <Image source={scan} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('History Page')}>
                    <Image source={history} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('User Profile')}>
                    <Image source={userProfile} style={styles.icon} />
                </TouchableOpacity>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -30,
    },
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 26,
        padding: 20,
        fontFamily: 'Montserrat-Regular',
    },
    TextView: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        top: -30,
    },
    banner: (scrollA) => ({
        height: BANNER_HEIGHT,
        width: '100%',
        transform: [{ translateY: scrollA }],
    }),
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
    lineUnder:{
        height: 3,
        backgroundColor: 'green',
        width: 70,
        marginTop: -17,
        marginLeft: 20,
    },
    ViewButton: {
        backgroundColor: 'transparent', // Set the background to transparent
    },
    viewAllText: {
        color: 'black', // Set the text color
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 20, // Add padding to make it act like a button
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
        height: 175, // Adjusted height
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
        marginBottom: -20,
        
    },
    imageStyle: {
        width: 150, // Adjusted width
        height: 150, // Adjusted height
        margin: 10,
    },
    listContainer: {
        flexDirection: 'column',
        marginHorizontal: 20,
        marginTop: 50,

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
    }

});

export default Homepage;
