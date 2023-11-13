import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function ProfileContainer ({itemText, subitemText}) {
    return (
    <View stype={styles.itemContainer}>
        <View>
            <Text style={styles.itemText}>{itemText}</Text>
            <Text style={styles.subitemText}>{subitemText}</Text>
        </View>
        <AntDesign name="right" size={24} color="gray" />
    </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection:'row',
        // alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    itemText: {
        fontSize: 16,
        color:'#9B9B9B',
    },
    subitemText: {
        fontSize: 11,
        color:'#9B9B9B',
    }
})