import {React, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, Pressable, ToastAndroid } from 'react-native';
import login_bg3 from '../../assets/login_bg-3.png';
import button1 from '../../assets/button-1.png';
import infoIcon from '../../assets/Name.png';
import lockIcon from '../../assets/Lock.png';
import emailIcon from '../../assets/Email.png';
import contactIcon from '../../assets/Call.png';

export default function SignUp( {navigation}) {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
   
    const showToast = (message) => {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        };

 
    const handleSignUp = async () => {
        try {
          const response = await fetch('https://softies-backend-production.up.railway.app/api/users/signup', { 
          method: 'POST',
          body: JSON.stringify({
              "email":email,
              "password": password,
              "username":username,
              "first_name": firstName,
              "first_name": lastName,
              "contact": contact
            }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
          const result = await response.json();
          if (result.msg== "Account created successfully"){
            showToast(result.msg)
            navigation.navigate('Homepage')
          }
          showToast(result.msg)
         console.log("error")
        } catch (error) {
          console.log(error)
        }
      };

    
    return(
        <ImageBackground
        source={login_bg3}
        style={styles.background}
        >
            <View style = {styles.container}>
                <Pressable style = {styles.goBackButton} onPress={() => navigation.goBack()}>
                    <Image source={button1} style={styles.buttonImage} />
                </Pressable>
                <View style = {styles.textContainer}> 
                    <Text style = {styles.registerText}>
                        Register 
                    </Text>
                    <Text style = {styles.text}>
                        Create your new account 
                        {'\n'}
                    </Text>
                </View>
                
                <View style = {styles.inputContainer}>
                    {/* First Name input */}
                    <View style={styles.textInput}>
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
                    <View style={styles.textInput}>
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
                    <View style={styles.textInput}>
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

                    <View style={styles.textInput}>
                        <Image source={emailIcon} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                            keyboardType="user-name"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Contact Input */}
                    <View style={styles.textInput}>
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
                    <View style={styles.textInput}>
                        <Image source={lockIcon} style={styles.inputIcon} />
                        <TextInput style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry = {true}
                        />
                    </View>

                </View>
                <View style = {styles.buttonContainer}>
                    <Pressable style={styles.SignUpButton} onPress={()=>handleSignUp()}>
                        <Text style={styles.SignUpButtonText}>Sign Up</Text>
                    </Pressable>
                </View>

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    goBackButton: {
        position: 'absolute',
        marginTop: 80,
        left: 10,
      },
    buttonImage: {
        width: 40,
        height: 40,
    },
    textContainer: {
        color: '#086608',
        fontSize: 35,
        marginTop: 200,
        marginBottom: 10,
        alignItems: 'center',
    }, 
    registerText: {
        color: '#086608',
        fontSize: 35,
        fontWeight: 'bold'
    },
    text: {
        color: '#086608',
        fontSize: 16, 
        fontWeight: 'medium'
    },
    inputContainer: {
        alignItems: 'center',
        marginBottom: 30,
    }, 
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        width: 315, 
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    inputIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'white',
        borderBottomWidth: 1,
        color: '#086608',
        marginLeft: 15,
        fontSize: 12,
        fontWeight: 'medium'
    },
    buttonContainer: {
        alignItems: 'center',
    }, 
    SignUpButton: {
        backgroundColor: '#086608',
        borderRadius: 30,
        padding: 10,
        marginVertical: 10, 
        width: 320,
        alignItems: 'center',
    },
    SignUpButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'medium'
    },
})
