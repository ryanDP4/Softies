import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';

export default function History ({navigation}) {
    return(
        <View>
            <Text>History Page</Text>
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
