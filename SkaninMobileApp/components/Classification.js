import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';

export default function Classification({navigation}) {
    return(
        <View>
            <Text>Classification Page</Text>
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
