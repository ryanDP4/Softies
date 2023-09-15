import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => 
      [...currentCourseGoals,
        {
          text: enteredGoalText , key: Math.random().toString()
        }
      ]
    )
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

            <View>
              <FlatList data = {courseGoals}
                renderItem={(itemData) => {
                  return <GoalItem text={itemData.item.text}/>
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
});
