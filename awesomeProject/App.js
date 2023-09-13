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
      enteredGoalText
    ]);
    setEnteredGoalText(""); // Clear the input field after adding a goal
  }

  const backgroundImageUri = 'https://mcdn.wallpapersafari.com/medium/42/4/fASXav.png';

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
            value={enteredGoalText}
          />
          <Button title='Add Goal' onPress={addGoalHandler} color='green' />
        </View>
        <View style={styles.goalContainer}>
          <View style={styles.goalHeaderContainer}>
            <Text style={styles.goalHeaderText}>LIST OF GOALS</Text>
          </View>
          <View>
            <ScrollView>
              <FlatList
                data={courseGoals}
                renderItem={({ item, index }) => (
                  <View style={styles.goalItem} key={index}>
                    <Text style={styles.goalText}>{item}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
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