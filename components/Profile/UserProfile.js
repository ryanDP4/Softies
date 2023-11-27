import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';

export default function UserProfile({navigation}) {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf')
});

  const [isEditMode, setIsEditMode] = useState(false);
  const [username, setUsername] = useState('User Name');
  const [occupation, setOccupation] = useState('Agronomist/Farmer');

  return (
    <View style = {styles.screenContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
          <Icon name="arrow-back" size={28} color="#000" /> 
        </TouchableOpacity>
        <View style = {styles.headerContainer}>
          <Text style = {styles.headerText}>My Profile</Text>
        </View>
        <View style={styles.profileIconContainer}>
          <View style={styles.profileIcon}>
            <Image style={styles.profilePicture} source={require('../../assets/user_profile.png')}/>
        </View>
        <TouchableOpacity onPress={() => setIsEditMode(!isEditMode)} style={styles.editIconContainer}>
          <View style={styles.editIcon}>
            <Image style={styles.editPicture} source={require('../../assets/Pencil Drawing.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.userContainer}>
        {isEditMode ? (
        <>
        <TextInput
          style={styles.userName}
          onChangeText={setUsername}
          value={username}/>
        <TextInput
          style={styles.userPosition}
          onChangeText={setOccupation}
          value={occupation}/>
        </>
        ) : (
          <>
            <Text style={styles.userName}>{username}</Text>
            <Text style={styles.userPosition}>{occupation}</Text>
          </>
        )}
        <View style = {styles.detailsContainer}>
          <View style = {styles.firstDetailContainer}>
            <Image style = {styles.iconDetails} source = {require('../../assets/Email.png')}/>
            <Text style = {styles.detailsText}>teamsofties@tip.edu.ph</Text>
          </View>

          <View style = {styles.eachDetailContainer}>
            <Image style = {styles.iconDetails} source = {require('../../assets/Call.png')}/>
            <Text style = {styles.detailsText}>+639 xxx xxx xxx </Text>
          </View>

          <View style = {styles.eachDetailContainer}>
            <Image style = {styles.iconDetails} source = {require('../../assets/Lock.png')}/>
            <Text style = {styles.detailsText}>Change Password</Text>
          </View>

          <View style = {styles.eachDetailContainer}>
            <Image style = {styles.iconDetails} source = {require('../../assets/Logout.png')}/>
            <Text style = {styles.detailsText}>Logout</Text>
          </View>


        </View>
      </View>
    </View>

  );

}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  }, 
  goBackButton: {
    position: 'absolute',
    marginTop: 30,
    left: 10,
  },
  headerContainer: {
    marginLeft: 5, 
    marginTop: 70,
  },
  headerText: {
    color: '#000',
    fontSize: 30,
    fontWeight: '600',
    padding: 20,
    fontFamily: 'Montserrat-Regular',
  }, 
  profileIconContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 25,
  }, 
  profileIcon: {
    borderRadius: 100,
    height: 150,
    width: 150,
    borderColor: '#D7DFC9',
    borderWidth: 10,
    overflow: 'hidden',
  },
  profilePicture: {
    height: 120, 
    width: 120,
    borderRadius: 65, 
    alignSelf: 'center',
    borderWidth: 0,
    overflow: 'hidden',
  },
  editIconContainer: {
    position: 'absolute',
    marginLeft: 100,
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    borderRadius: 80,
    height: 45,
    width: 45,
    borderColor: '#D7DFC9',
    borderWidth: 6,
    backgroundColor: 'white',
  },
  editPicture: {
    height: 30, 
    width: 30,
    alignSelf: 'center',
    borderWidth: 0,
    overflow: 'hidden',
  },
  userContainer: {
    alignItems: 'center',
    marginTop: 20, 
    textAlign: 'center',
    justifyContent: 'center',
  }, 
  userName: {
    color: '#000',
    fontWeight: '400',
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  userPosition: {
    color: '#000',
    fontSize: 15,
    paddingTop: 5,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  detailsContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10, 
    height: 350,
    width: 320,
    marginTop: 20,
  },
  firstDetailContainer: {
    backgroundColor: '#D7DFC9',
    height: 50,
    width: 320,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  eachDetailContainer: {
    backgroundColor: '#D7DFC9',
    height: 50,
    width: 320,
    borderBottomWidth: 1,
    marginTop: 10,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  iconDetails: {
    height: 30,
    width: 30,
    marginLeft: 15,
  },
  
  detailsText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    marginLeft: 20,
  },
})