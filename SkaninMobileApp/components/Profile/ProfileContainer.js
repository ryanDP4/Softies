import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

export default function ProfileContainer ({itemText, borderTopRadius = 0, borderBottomRadius = 0, svg=null, edit=null}) {
    const [fontsLoaded] = useFonts({
        'Monsteratt': require('../../assets/fonts/Montserrat-Regular.ttf'),
      });
    const Editor = ({ edit }) => {
        if (edit == 'edit') {
            return (
                <Text style={{fontSize : 14, fontStyle : 'Monsteratt' , 
                color : '#9B8C8C', fontWeight : 500, lineHeight: 8,
                textDecorationLine:'underline', 
                paddingTop:6, }}
                >Edit</Text>
            )
        }
        else if (edit == 'arrow'){
            return (
                <Image source={require(`../../assets/Right Arrow.svg`)}
                style={{width:21, height:37, paddingBottom:4}} />
            )
        }
        return ( <Text style={{paddingRight:20}}></Text> )
    }
    return (
    <View style={[styles.itemContainer, {
        borderTopLeftRadius:borderTopRadius, borderTopRightRadius:borderTopRadius,
        borderBottomLeftRadius:borderBottomRadius, borderBottomRightRadius:borderBottomRadius
        }]}>
        <Image source={require(`../../assets/${svg}.svg`)}style={styles.imageStyle} 
        />
        <Text style={styles.itemText}>{itemText}</Text>
        <Editor edit={edit}/>
    </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        flexDirection:'row',
        height: '16%',
        backgroundColor: '#D7DFC9',
        justifyContent: 'space-between',
        borderBottomColor: '#808080',
        borderBottomWidth: 0.5,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        paddingTop: 16,
    },
    itemText: {
        width:'75%',
        paddingTop: '2%',
        paddingLeft: 8,
        fontSize: 16,
        color:'#6A5F5F',
        fontStyle:'Montserrat',
        textAlign: 'left',
    },
    imageStyle:{
        height: 32,
        width: 32,
    }
})