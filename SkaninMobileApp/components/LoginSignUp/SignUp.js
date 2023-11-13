import {React, useState} from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, Pressable } from 'react-native';
import login_bg3 from '../../assets/login_bg-3.png';
import button1 from '../../assets/button-1.png';
import infoIcon from '../../assets/Name.png';
import lockIcon from '../../assets/Lock.png';
import emailIcon from '../../assets/Email.png';
import contactIcon from '../../assets/Call.png';

export default function SignUp( {navigation}) {
      const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf')
  });

//   if (!fontsLoaded) {                                                                                                                                                                                                                                                                                           
//     return null;
// }

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');

    

    return(
        <ImageBackground
        source={login_bg3}
        style={styles.background}
        >
            <View style = {styles.container}>
                <Pressable style = {styles.goBackButton} onPress={() => navigation.goBack()}>
                    <Image source={button1} style={styles.buttonImage} />
                </Pressable>
                <Text style = {styles.registerText}>
                    Register
                </Text>
                <Text style = {styles.text}>
                    Create your new account 
                    {'\n'}
                    {'\n'}
                    {'\n'}
                </Text>
                
                {/* First Name input */}
                <View style={styles.inputContainer}>
                    <Image source={infoIcon} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={setfirstName}
                        keyboardType="first-name"
                        autoCapitalize="none"
                    />
                </View>

                {/* Last Name input */}
                <View style={styles.inputContainer}>
                    <Image source={infoIcon} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Last name"
                        value={lastName}
                        onChangeText={setlastName}
                        keyboardType="last-name"
                        autoCapitalize="none"
                    />
                </View>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Image source={emailIcon} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* Contact Input */}
                <View style={styles.inputContainer}>
                    <Image source={contactIcon} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Contact"
                        value={contact}
                        onChangeText={setContact}
                        keyboardType="contact"
                        autoCapitalize="none"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Image source={lockIcon} style={styles.inputIcon} />
                    <TextInput style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry = {true}
                    />
                </View>

                <Pressable style={styles.SignUpButton} onPress={() => navigation.navigate('Homepage')}>
                    <Text style={styles.SignUpButtonText}>Sign Up</Text>
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
    registerText: {
        color: '#086608',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 95,
        marginTop: 150,
        fontFamily: 'Montserrat-Bold',
    },
    text: {
        color: '#086608',
        fontSize: 18, 
        fontWeight: 'bold',
        marginLeft: 65, 
        shadowOffset: 10,
        fontFamily: 'Montserrat-Medium',
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
        color: '#086608',
        marginLeft: 15,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
    },
    SignUpButton: {
        backgroundColor: '#086608',
        padding: 10,
        marginTop: 100,
        borderRadius: 30,
        width: 350,
        alignItems: 'center',
    },
    SignUpButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
    },
})
