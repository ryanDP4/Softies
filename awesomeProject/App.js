import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,
  ImageBackground, FlatList, ScrollView} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  
  // function goalInputHandler(enteredText) {
  //   setEnteredGoalText(enteredText);
  // };

  function addGoalHandler(props) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()}
    ]);
    console.log(courseGoals);
  };

  const backgroundImageUri = 'https://i.pinimg.com/originals/99/24/5e/99245ed3fea14f1433a542bec4515428.jpg';

  return (
    <ImageBackground
      source={{ uri: backgroundImageUri }}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
        <View style={styles.backgroundContainer}>

          <GoalInput onAddGoal={addGoalHandler}/>

          <View style={styles.goalContainer}>
            <View style={styles.goalHeaderContainer}>
              <Text style={styles.goalHeaderText}>LIST OF GOALS</Text>
            </View>
            <View style={styles.goalListContainer}>
              <FlatList data = {courseGoals}
                renderItem={(itemData) => {
                  // <GoalItem text={itemData.item.text} />
                  <View style={styles.goalContainer}>
                    <Text style={styles.goalItem}>{itemData.item.text}</Text>
                    {/* {console.log(itemData.item)} */}
                  </View>
                }} />
            </View>
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
    paddingBottom:20
  },


  backgroundContainer: {
    backgroundColor: 'rgba(255, 253, 208 ,0.85)',
    borderRadius: 20,
    width: '100%',
    height: '100%',
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
  goalListContainer: {
    padding: 5,
  },
  goalContainer: {
    flex: 5,
    backgroundColor: 'rgba(255, 255, 255)',
    padding: 10,
    borderRadius: 10,
  },
goalItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#74A12E',
  },
});
