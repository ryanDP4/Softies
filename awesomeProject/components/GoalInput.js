import {View, Button, TextInput} from 'react-native';
import { useState } from 'react';

export default function GoalInput (props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }
    return (    
            <View style={styles.inputContainer}>
            <TextInput
                placeholder='Your Course Goal'
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText} />
            <Button title='Add Goal' onPress={addGoalHandler} color='green' />
            </View>
    )
}

const styles = {
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
    textInput: {
        borderWidth: 1,
        borderColor: '#74A12E',
        width: '70%',
        marginRight: 8,
        padding: 13,
        backgroundColor: 'white',
        borderRadius: 5,
        },
}