import React, { useState } from 'react'; // Added "React" and "useState"
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, Pressable } from 'react-native';
import login_bg3 from '../../assets/login_bg-3.png';
import button1 from '../../assets/button-1.png';
import userIcon from '../../assets/User.png';
import lockIcon from '../../assets/Lock.png';

export default function LoginPage({ navigation }) {
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf')
    });

    // if (!fontsLoaded) {
    //     return null;
    // }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login button pressed');
    };

    return (
        <ImageBackground
            source={login_bg3}
            style={styles.background}
        >
            <View style={styles.container}>
                <Pressable style={styles.goBackButton} onPress={() => navigation.goBack()}>
                    <Image source={button1} style={styles.buttonImage} />
                </Pressable>
                <Text style={styles.Welcometext}>
                    Welcome back!
                </Text>
                <Text style={styles.text}>
                    Login to your personal account
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    {'\n'}
                    {'\n'}
                </Text>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Image source={userIcon} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Image source={lockIcon} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>

                <Pressable style={styles.LoginButton} onPress={() => navigation.navigate('Homepage')}>
                    <Text style={styles.LoginButtonText}>Login</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        top: 0,
        backgroundColor: 'transparent',
        alignItems: 'flex-start', 
        marginLeft: 25,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    goBackButton: {
        position: 'absolute',
        marginTop: -15,
        left: -10,
    },
    buttonImage: {
        width: 40,
        height: 40,
    },
    Welcometext: {
        color: '#086608',
        fontSize: 40,
        marginLeft: 10,
        marginTop: 150,
        fontFamily: 'Montserrat-Bold',
    },
    text: {
        color: '#086608',
        fontSize: 18, 
        marginLeft:30, 
        shadowOffset: 10,
        fontFamily: 'Montserrat-Medium',
    },
    LoginButton: {
        backgroundColor: '#086608',
        padding: 10,
        marginTop: 200,
        borderRadius: 30,
        width: 350,
        alignItems: 'center',
    },
    LoginButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginLeft: 10, 
        width: 320, 
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    inputIcon: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'white',
        borderBottomWidth: 1,
        color: '#049B04',
        marginLeft: 15,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
    },

});