import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, 
  ImageBackground, FlatList, ScrollView} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text:enteredGoalText, key:Math.random().toString()}
    ]);
    setEnteredGoalText(""); // Clear the input field after adding a goal
  }

  // const Goal = ({item}) => {
  //   <Text style={styles.goalItem}>{item.text}</Text>
  // }

  // const GoalList = () => {
  //   <View style={styles.goalContainer}>
  //     <FlatList data={courseGoals}
  //     renderItem={(itemData) => {
  //       return <Goal item={itemData}/>
  //     }}
  //     />
  //   </View>
  // }



  const backgroundImageUri = 'https://i.pinimg.com/originals/99/24/5e/99245ed3fea14f1433a542bec4515428.jpg?fbclid=IwAR2SgmIXtpjTt58bMyChKWZk8ww_y4ohE5QRMVPBBd3CDfrf112K-qScZ0Y';

  return (
    <ImageBackground
    source={{ uri: backgroundImageUri }}
    style={styles.backgroundImage}
  >
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Your Course Goal'
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText} />
          <Button title='Add Goal' onPress={addGoalHandler} color='green' />
        </View>

        <View style={styles.goalContainer}>
          <View style={styles.goalHeaderContainer}>
            <Text style={styles.goalHeaderText}>LIST OF GOALS</Text>
          </View>
          <View style={styles.goalListContainer}>
            <FlatList data={courseGoals} 
              renderItem={(itemData) => {
                return(
                  <View style={styles.goalContainer}>
                    <Text style={styles.goalItem}>{itemData.item.text}</Text>
                  </View>
                )
              }}/>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#74A12E',
    backgroundColor: 'rgba(255, 255, 255)',
    padding: 10,
    borderRadius: 10,
  },
  goalListContainer:{
    padding:5,
  },
  goalContainer: {
    flex: 5,
    backgroundColor: 'rgba(255, 255, 255)',
    padding: 10,
    borderRadius: 10,
  },
  goalHeaderContainer: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  goalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  goalItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#74A12E',
  },
  goalText: {
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#74A12E',
    width: '70%',
    marginRight: 8,
    padding: 13,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});