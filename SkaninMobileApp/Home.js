import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';

export default function Home({navigation}) {
    return(
        <View>
            <Text>Home Page</Text>
            <View>
                <Text>Go to Classification</Text>
                <Button 
                    title = 'Classification'
                    onPress={() => navigation.navigate('Classification Page')}
                />
            </View>
            <View>
                <Text>Go to History</Text>
                <Button 
                    title = 'History'
                    onPress={() => navigation.navigate('History Page')}
                />
            </View>
            <View>
                <Text>Go to Summary</Text>
                <Button 
                    title = 'Summary'
                    onPress={() => navigation.navigate('Summary Page')}
                />
            </View>
            <View>
                <Text>Exit to Splash</Text>
                <Button 
                    title = 'Splash'
                    onPress={() => navigation.navigate('Landing Page')}
                />
            </View>
        </View>
    )
}
