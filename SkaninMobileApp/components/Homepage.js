import React, { useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Animated, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { LinearGradient } from 'react-native-svg';

const BANNER_HEIGHT = 400;

const Homepage = () => {
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
            // snapToOffsets={[...Array(4).keys()].map((item, index) => index * 240)}
        >
            <View style={styles.container}>
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

                    



                </View>
            </View>
        </ImageHeaderScrollView>
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
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        padding: 10,
        // marginBottom: 100,
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


});

export default Homepage;
