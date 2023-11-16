import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'; 
// import ProfileContainer from './components/ProfileContainer';
import BigHeadline from './BigHeadline';
import { useFonts } from 'expo-font';
import Email from '../../assets/Email.svg';
import Call from '../../assets/Call.svg';
import Lock from '../../assets/Lock.svg';
import Logout from '../../assets/Logout.svg';
 
const ProfileContainer = ({itemText, borderTopRadius = 0, 
                            borderBottomRadius = 0, svg=null, edit=null}) => {
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
    // const ImageLogo = ({svg}) => {
    //     console.log(svg)
    //     if (svg === 'Email'){
    //         return <Image source={Email} style={{height: 32,width: 32,}}></Image>
    //     } else if (svg === 'Call'){
    //         return <Image source={Call} style={{height: 32,width: 32,}}></Image>
    //     } else if (svg === 'Lock'){
    //         return <Image source={Lock} style={{height: 32,width: 32,}}></Image>
    //     } else if (svg === 'Logout'){
    //         return <Image source={Logout} style={{height: 32,width: 32,}}></Image>
    //     }
    // }
    return (
    <View style={{ display: 'flex', flexDirection:'row', height: '16%',
                    backgroundColor: '#D7DFC9', justifyContent: 'space-between',
                    borderBottomColor: '#808080', borderBottomWidth: 0.5,
                    paddingLeft: 16, paddingRight: 16, paddingBottom: 16, paddingTop: 16,
                    borderTopLeftRadius:borderTopRadius, borderTopRightRadius:borderTopRadius,
                    borderBottomLeftRadius:borderBottomRadius, borderBottomRightRadius:borderBottomRadius
                    }}>
        <Image source={svg} style={{height: 32,width: 32,}}></Image>
        <Text style={{ 
                    width:'75%',
                    paddingTop: '2%',
                    paddingLeft: 8,
                    fontSize: 16,
                    color:'#6A5F5F',
                    fontStyle:'Montserrat',
                    textAlign: 'left',
        }}>{itemText}</Text>
        <Editor edit={edit}/>
    </View>
    )
}

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
                <ProfileContainer itemText={"matildabrown@gmail.com"} borderTopRadius={16} svg={Email} edit={'edit'}></ProfileContainer>
                
                <ProfileContainer itemText={"+639 xxx xxx xxx "} svg={Call} edit={'edit'}></ProfileContainer>
                
                <ProfileContainer itemText={"Change Password"} svg={Lock} edit={'arrow'}></ProfileContainer>
                
                <ProfileContainer itemText={"Logout"} svg={Logout}></ProfileContainer>
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