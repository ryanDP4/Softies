// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { useState } from 'react';
 
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => 
      [...currentCourseGoals,enteredGoalText]
    )
    console.log(courseGoals)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
          placeholder='Your course goal!' 
          onChangeText={goalInputHandler} 
          value = {enteredGoalText}
          />
        <Button title='ADD GOAL' onPress={()=>{
          addGoalHandler()
          setEnteredGoalText('')
        }}/>
      </View>
      <View style={styles.goalContainer}>
        <Text >List of Goals</Text>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    flex:1,
    marginBottom:24,
    // borderBottom:1,
    borderBottomColor: '#cccccc',
    borderBottomWidth:1,
  },
  textInput:{
    borderWidth: 1,
    color:'#cccccc',
    borderColor:'#cccccc',
    width:'70%',
    marginRight: 8,
    padding:13
  },
  goalContainer: {
    flex:3,
  }
});
