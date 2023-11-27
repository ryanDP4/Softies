import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

export default function BigHeadline ({Headline, navigation}) {
    const [fontsLoaded] = useFonts({
        'Monsteratt': require('../../assets/fonts/Montserrat-Regular.ttf'),
      });
    return (
        <View style={styles.topContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
                    <Icon name="arrow-back" size={28} color="#000" style={{width:24, height:24,}}/> 
                </TouchableOpacity>
            </View>
        <Text style={[styles.headerText]}>{Headline}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        margin: 0,
        width: '100%',
        padding: 0,
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    topContainer: {
        margin: 0,
        paddingTop: 10,
    },
    headerText:{
        // flex:1,
        textAlign: 'left',
        color: '#000',
        fontSize: 30,
        fontStyle: 'Monsteratt',
        // fontWeight: '700',
        paddingTop: 10,
        padding: 0,
        margin:0,
        paddingLeft:'5%',
    },
    goBackButton: {
        height: 30,
        width: 30,
    }
})
