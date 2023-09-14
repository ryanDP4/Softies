import { Text, View } from 'react-native';

export default function GoalItem( {props}) {
    return (
        <View style={styles.goalContainer}>
            <Text style={styles.goalItem}>{props.text}</Text>
            {console.log(props.text)}
        </View>
    )
};

const styles = {
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
}