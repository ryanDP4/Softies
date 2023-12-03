import React, { useState , useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, Pressable,ToastAndroid } from 'react-native';
import login_bg3 from '../../assets/login_bg-3.png';
import button1 from '../../assets/button-1.png';
import userIcon from '../../assets/User.png';
import lockIcon from '../../assets/Lock.png';

export default function LoginPage({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
      };

    const handleLogin = async () => {
        try {
          const response = await fetch('https://softies-backend-production.up.railway.app/api/users/login', { 
          method: 'POST',
          body: JSON.stringify({
              "email":email,
              "password": password
            }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
          const result = await response.json();
          if (result.msg== "Logged in successfully!"){
            showToast(result.msg)
            navigation.navigate('Homepage')
          }
          showToast(result.msg)
         console.log("error")
        } catch (error) {
          console.log(error)
        }
      };
 
      
    //   useEffect(() => {
    //     console.log(articles, "AR");
    //   }, [articles]);

    return (
        <ImageBackground
            source={login_bg3}
            style={styles.background}
        >
            <View style={styles.container}>
                <Pressable style={styles.goBackButton} onPress={() => navigation.goBack()}>
                    <Image source={button1} style={styles.buttonImage} />
                </Pressable>
                <View style = {styles.textContainer}> 
                    <Text style={styles.Welcometext}>
                        Welcome back! {'\n'}
                        <Text style={styles.text}>
                            Login to your personal account
                            {'\n'}
                            {'\n'}
                        </Text>
                    </Text>
                </View>
                <View style = {styles.inputContainer}>
                    {/* Email Input */}
                    <View style={styles.textInput}>
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
                    <View style={styles.textInput}>
                        <Image source={lockIcon} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style = {styles.buttonContainer}>
                    <Pressable style={styles.LoginButton} onPress={() => handleLogin()}>
                        <Text style={styles.LoginButtonText}>Login</Text>
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
    Welcometext: {
        color: '#086608',
        fontSize: 35,
        fontWeight: 'bold'
    },
    text: {
        color: '#086608',
        fontSize: 18, 
        fontWeight: 'normal'
    },
    buttonContainer: {
        alignItems: 'center',
    }, 
    LoginButton: {
        backgroundColor: '#086608',
        borderRadius: 30,
        padding: 10,
        marginVertical: 10, 
        width: 320,
        alignItems: 'center',
    },
    LoginButtonText: {
        color: 'white',
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
        height: 45,
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
        color: '#049B04',
        marginLeft: 15,
        fontSize: 12,
        fontWeight: 'medium'
    },

});