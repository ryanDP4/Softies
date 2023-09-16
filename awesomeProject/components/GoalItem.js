import { Text, View } from 'react-native';

export default function GoalItem(props) {
    return (
        <View>
            <Text style={styles.goalItem}>{props.text}</Text>
        </View>
    )
};

const styles = {
    goalItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#74A12E',
      },
}