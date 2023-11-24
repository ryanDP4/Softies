import React, { useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar, Animated, Image, Pressable, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { ImageHeaderScrollView } from 'react-native-image-header-scroll-view';
import { useNavigation } from '@react-navigation/native';

const BANNER_HEIGHT = 400;

const Homepage = () => {
    const navigation = useNavigation(); 
    const scrollA = useRef (new Animated.Value(0)).current;
    const homebannerIMG = require('../assets/homebanner.png');
    const sampleIMG1 = require('../assets/sampleIMG1.svg');
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style = {styles.container}>
            <ImageHeaderScrollView
                maxHeight={BANNER_HEIGHT}
                minHeight={100}
                renderHeader={() => (
                <Animated.Image
                    style={{ width: '100%', height: BANNER_HEIGHT }}
                    source={homebannerIMG}
                />
                )}>
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
                        style={styles.imageScrollView}>
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
        </View>
    )

}

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
        borderColor: 'black', 
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
});

export default Homepage;