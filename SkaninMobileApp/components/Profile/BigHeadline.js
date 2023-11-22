import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'; 
// import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

export default function BigHeadline ({Headline}) {
    const [fontsLoaded] = useFonts({
        'Monsteratt': require('../../assets/fonts/Montserrat-Regular.ttf'),
      });
    return (
        <View style={styles.topContainer}>
            <View style={styles.headerContainer}>
                <Image source={require(`../../assets/icon.svg`)}
                    style={{width:24, height:24,}} />
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
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        padding: 0,
        margin:0,
        paddingLeft:'5%',
    },
})
