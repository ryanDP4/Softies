import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'; 
// import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
 
export default function BigHeadline ({Headline}) {
    const [fontsLoaded] = useFonts({
        'Monsteratt': require('../../assets/fonts/Montserrat-Regular.ttf'),
      });
const navigation = useNavigation()
    return (
        <View style={styles.topContainer}>
            <View style={styles.headerContainer}>
            <TouchableOpacity 
                    style = {{width:24, height:24,}}
                    title = 'Home'
                    onPress={() => navigation.navigate('Homepage')}
                    >
                <Image source={require(`../../assets/icon.svg`)}
                    style={{width:24, height:24,}} />
            </TouchableOpacity>
            </View>
            <Text style={[styles.headerText,{fontStyle:'Monsteratt'}]}>{Headline}</Text>
            
        </View>
    )
}



const styles = StyleSheet.create({
    headerContainer: {
        margin: 0,
        width: '100%',
        padding: 0,
        justifyContent: 'space-between',
        paddingLeft:'4%'
    },
    topContainer: {
        margin: 0,
        paddingTop:'6%'
    },
    headerText:{
        // flex:1,
        textAlign: 'left',
        color: '#000',
        fontSize: 30,
        color: '#222222',
        fontFamily: 'Montserrat',
        fontSize: 34,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        padding: 0,
        margin:0,
        paddingLeft:'5%',
        paddingTop: 15,
        paddingLeft: 8,
        paddingBottom: 16,
    },
})