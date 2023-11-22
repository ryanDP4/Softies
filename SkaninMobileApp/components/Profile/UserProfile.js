import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'; 
import ProfileContainer from './ProfileContainer';
import BigHeadline from './BigHeadline';
import { useFonts } from 'expo-font';

export default function Profile({navigation}) {
    const [fontsLoaded] = useFonts({
        'Monsteratt': require('../../assets/fonts/Montserrat-Regular.ttf'),
      });
    return(
        <View style={styles.pageContainer}>
            <BigHeadline Headline={"My Profile"}></BigHeadline>
            <View style={styles.profileContainer}>

                <Image 
                    source={require('../../assets/matilda brown.svg')}  
                    style={styles.imageStyle} 
                />
                <Image source={require('../../assets/Pencil Drawing.svg')}
        


                    style={styles.smallImageStyle} />
                <Text style={styles.nameText}>Matilda Brown</Text>
                {/* <Text style={styles.emailText}>matildabrown@mail.com</Text> */}
            </View>
            <View style={styles.itemsContainer}>
                <ProfileContainer itemText={"matildabrown@gmail.com"} borderTopRadius={16} svg={'Email'} edit={'edit'}></ProfileContainer>
                
                <ProfileContainer itemText={"+639 xxx xxx xxx "} svg={'Call'} edit={'edit'}></ProfileContainer>
                
                <ProfileContainer itemText={"Change Password"} svg={'Lock'} edit={'arrow'}></ProfileContainer>
                
                <ProfileContainer itemText={"Logout"} svg={'Logout'}></ProfileContainer>
            </View>
            <View style={styles.footerStyle}>
                <TouchableOpacity 
                    style = {{height:'45%', backgroundColor: 'green'}}
                    title = 'Home'
                    onPress={() => navigation.navigate('Homepage')}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding:0,
        paddingTop: '10%',
    },
    imageStyle: {
        width: 120, 
        height: 120, 
        borderRadius: '100%',
        borderColor: '#D7DFC9',
        borderWidth: 6,
    },
    smallImageStyle: {
        resizeMode: 'center',
        width: 30, 
        height: 30, 
        borderRadius: '100%',
        borderColor: '#D7DFC9',
        borderWidth: 3,
        position: 'absolute',
        backgroundColor: '#ffffff',
        top: '57%',
        right: '36%',
    },
    profileContainer: {
        background: '#F9F9F9',
        alignItems: 'center',
        justifyContent: 'center',
        // padding:0,
        paddingTop:52,
        paddingBottom:32,
        // border: 10,
        // borderColor: '#ffffff',
        // borderWidth: 10,
    },
    itemsContainer: {
        display: 'flex',
        alignSelf: 'center',
        width: '80%',
        height: '50%',
        borderRadius: 16,
        backgroundColor: '#D9D9D9'
        // height: '50%',
    },
    nameText:{
        paddingTop: 19,
        color: '#000',
        fontStyle: 'Monsteratt',
        
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 23,
    },
    footerStyle:{
        display: 'flex',
        flex: 1,
        alignSelf: 'stretch',
        justifyContent:"flex-end"
    }
}) 