import { StyleSheet, View, Image, Text, TouchableOpacity, Button } from 'react-native'; 
import ProfileContainer from '../../components/Profile/ProfileContainer';
import BigHeadline from '../../components/Profile/BigHeadline';

export default function Profile({navigation}) {
    return(
        <View style={styles.pageContainer}>
            <BigHeadline Headline={"My Profile"}></BigHeadline>
            <View style={styles.profileContainer}>
                <Image 
                source={require('../../assets/sampleUser.png')}  
                style={{width: 69, height: 69, borderRadius: 69/ 2}} 
                />
                <Text style={styles.nameText}>Matilda Brown</Text>
                <Text style={styles.emailText}>matildabrown@mail.com</Text>
            </View>

            <ProfileContainer itemText={"My scans"} subitemText={"Already have 12 scans"}></ProfileContainer>
            <ProfileContainer itemText={"Full Name"} subitemText={"Alicia Batumbakal"}></ProfileContainer>
            <ProfileContainer itemText={"Address"} subitemText={"Mindoro"}></ProfileContainer>
            <ProfileContainer itemText={"Contact Number"} subitemText={"09876543211"}></ProfileContainer>
            <ProfileContainer itemText={"My reviews"} subitemText={"Reviews for 4 items"}></ProfileContainer>
            <ProfileContainer itemText={"Settings"} subitemText={"Notifications, password"}></ProfileContainer>
            
            <Button 
                    title = 'Home'
                    onPress={() => navigation.navigate('Homepage')}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
    },
    profileContainer: {
        flex: 3,
        width: '100%',
        height: 812,
        borderRadius: 20,
        background: '#F9F9F9',
    },
    itemContainer: {
        flex: 1,
        flexDirection:'row',
        // alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    nameText:{
        color: '#222',
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '100',
        lineHeight: 22, /* 122.222% */
    },
    emailText:{
        color: '#9B9B9B',
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 20, /* 142.857% */
    }
}) 