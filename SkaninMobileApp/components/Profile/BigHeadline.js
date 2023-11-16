import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function BigHeadline ({Headline}) {
    return (
        <View style={styles.topContainer}>
            <View style={styles.headerContainer}>
                <AntDesign name="left" size={24} color="black" />
                <Image style={styles.searchButton} 
                source={require('../../assets/baseline-search-24px.svg')} />
            </View>
            <Text style={styles.headerText}>{Headline}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    headerContainer: {
        // display: 'flex',
        // flex:0,
        flexDirection:'row',
        margin: 0,
        width: '100%',
        height: 44,
        paddingTop: 8,
        paddingBottom: 16,
        paddingLeft: 4,
        paddingRight: 8,
        // alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    topContainer: {
        // flex: 4,
        margin: 0,
        padding:0,
    },
    searchButton: {
        width: 24, 
        height: 24,
        padding: 0,
        margin:0,
    },
    headerText:{
        // flex:1,
        textAlign: 'left',
        color: '#222222',
        fontFamily: 'Montserrat',
        fontSize: 34,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        paddingTop: 15,
        paddingLeft: 8,
        paddingBottom: 16,
    },
})