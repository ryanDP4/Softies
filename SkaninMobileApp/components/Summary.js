import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';

export default function Summary({navigation}) {
    return(
        <View>
            <Text>Summary Page</Text>
            <View>
                <Text>Back to Home</Text>
                <Button 
                    title = 'Home'
                    onPress={() => navigation.navigate('Home Page')}
                />
            </View>
        </View>
    )
}
