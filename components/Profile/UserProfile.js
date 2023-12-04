import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";

const arrowBack = require("../../assets/back.png");

export default function UserProfile({ navigation }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [username, setUsername] = useState("User Name");

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleLogout = async () => {
    const response = await fetch(
      "https://softies-backend-production.up.railway.app/api/users/logout",
      {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    showToast(result.msg);
    navigation.navigate("LandingPage");
  };
  const handleChangePassowrd = () => {
    navigation.navigate("ChangePassword");
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goBackButton}
      >
        <Image source={arrowBack} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>
      <View style={styles.profileIconContainer}>
        <View style={styles.profileIcon}>
          <Image style={styles.profilePicture} source={require('../../assets/user_profile.png')}/>
        </View>
        <TouchableOpacity
          onPress={() => setIsEditMode(!isEditMode)}
          style={styles.editIconContainer}
        >
          <View style={styles.editIcon}>
            <Image
              style={styles.editPicture}
              source={require("../../assets/edit_profile.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.userContainer}>
        {isEditMode ? (
          <>
            <TextInput
              style={styles.userName}
              onChangeText={setUsername}
              value={username}
            />
            <TextInput
              style={styles.userPosition}
            />
          </>
        ) : (
          <>
            <Text style={styles.userName}>{username}</Text>
          </>
        )}
        <View style={styles.detailsContainer}>
          <View style={styles.firstDetailContainer}>
            <Image
              style={styles.iconDetails}
              source={require("../../assets/profileName.png")}
            />
            <Text style={styles.detailsText}>Mikasa Yeager</Text>
          </View>

          <View style={styles.firstDetailContainer}>
            <Image style = {styles.iconDetails} source = {require('../../assets/Email.png')}/>
            <Text style={styles.detailsText}>teamsofties@tip.edu.ph</Text>
          </View>

          <View style={styles.eachDetailContainer}>
            <Image style = {styles.iconDetails} source = {require('../../assets/Call.png')}/>
            <Text style={styles.detailsText}>+639 xxx xxx xxx </Text>
          </View>

          <TouchableOpacity
            style={styles.eachDetailContainer}
            onPress={handleChangePassowrd}
          >
            <Image style={styles.iconDetails} source={require('../../assets/Lock.png')}/>
            <Text style={styles.detailsText}>Change Password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.eachDetailContainer}
            onPress={handleLogout}
          >
            <Image style={styles.iconDetails} source={require('../../assets/Logout.png')}/>
            <Text style={styles.detailsText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  goBackButton: {
    position: "absolute",
    marginTop: 30,
    left: 10,
  },
  headerContainer: {
    marginLeft: 5,
    marginTop: 70,
  },
  headerText: {
    color: "#000",
    fontSize: 30,
    fontWeight: "600",
    padding: 20,
    fontWeight: "medium",
  },
  profileIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    position: "relative",
  },
  profileIcon: {
    borderRadius: 75,
    height: 150,
    width: 150,
    borderColor: "#D7DFC9",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicture: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  editIconContainer: {
    position: "absolute",
    right: 145,
    bottom: 0,
    backgroundColor: "white",
    borderRadius: 25,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D7DFC9",
    borderWidth: 2,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  editIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  editPicture: {
    height: 25,
    width: 25,
    alignSelf: "center",
    borderWidth: 0,
    overflow: "hidden",
  },
  userContainer: {
    alignItems: "center",
    marginTop: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  userName: {
    color: "#000",
    fontWeight: "400",
    fontSize: 20,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "medium",
  },
  userPosition: {
    color: "#000",
    fontSize: 15,
    paddingTop: 5,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "medium",
  },
  detailsContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    height: 350,
    width: 320,
    marginTop: 20,
  },
  firstDetailContainer: {
    backgroundColor: "#D7DFC9",
    height: 50,
    width: 320,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  eachDetailContainer: {
    backgroundColor: "#D7DFC9",
    height: 50,
    width: 320,
    borderBottomWidth: 1,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  iconDetails: {
    height: 30,
    width: 30,
    marginLeft: 15,
  },

  detailsText: {
    fontWeight: "medium",
    fontSize: 13,
    marginLeft: 20,
  },
  goBackButton: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    marginTop: 40,
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
