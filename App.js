import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AreYouA from './components/LoginSignUp/AreYouA';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import LoginPage from './components/LoginSignUp/LoginPage';
import SignUp from './components/LoginSignUp/SignUp';
import Landing from './components/Landing';
import Homepage from './components/Homepage';
import History from './components/RecentScans';
import ScanPage from './components/Classification/Scan';
import { Image } from 'react-native';
import UserProfile from './components/Profile/UserProfile';
import ChangePassword from './components/Profile/ChangePassword';
import GrainGallery from './components/GrainGallery';
import RecentScans from './components/RecentScans';
import RecentScans1 from './components/RecentScans1';
import RecentScans2 from './components/RecentScans2';
import RecentScans3 from './components/RecentScans3';
import RecentScans4 from './components/RecentScans4';
import RecentScans5 from './components/RecentScans5';
import GrainGallery1 from './components/GrainGallery1';
import GrainGallery2 from './components/GrainGallery2';
import GrainGallery3 from './components/GrainGallery3';
import GrainGallery4 from './components/GrainGallery4';
import GrainGallery5 from './components/GrainGallery5';
import GrainGallery6 from './components/GrainGallery6';
import GrainGallery7 from './components/GrainGallery7';
import GrainGallery8 from './components/GrainGallery8';
import GrainGallery9 from './components/GrainGallery9';
import GrainGallery10 from './components/GrainGallery10';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home Page') {
            iconName = require('./assets/home.png');
          } else if (route.name === 'ScanPage') {
            iconName = require('./assets/scan.png');
          } else if (route.name === 'HistoryPage') {
            iconName = require('./assets/history.png');
          } else if (route.name === 'UserProfile') {
            iconName = require('./assets/User.png');
          }

          return <Image source={iconName} style={{ width: size, height: size }} />;
        },
        tabBarLabel: () => null, 
        tabBarStyle: {
          backgroundColor: '#049B04', 
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          display: route.name === 'ScanPage' ? 'none' : 'flex',
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home Page" component={Homepage} />
      <Tab.Screen name="ScanPage" component={ScanPage} />
      <Tab.Screen name="HistoryPage" component={History} />
      <Tab.Screen name="UserProfile" component={UserProfile}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={Landing}/> 
        <Stack.Screen name="AreYouA" component={AreYouA}/>
        <Stack.Screen name="LoginSignUp" component={LoginSignUp}/>
        <Stack.Screen name="LoginPage" component={LoginPage}/>
        <Stack.Screen name="SignUpPage" component={SignUp}/>
        <Stack.Screen name="Homepage" component={HomeTabs} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="GrainGallery" component={GrainGallery} />
        <Stack.Screen name="RecentScans" component={RecentScans} />
        <Stack.Screen name="RecentScans1" component={RecentScans1}/>
        <Stack.Screen name="RecentScans2" component={RecentScans2}/>
        <Stack.Screen name="RecentScans3" component={RecentScans3}/>
        <Stack.Screen name="RecentScans4" component={RecentScans4}/>
        <Stack.Screen name="RecentScans5" component={RecentScans5}/>
        <Stack.Screen name="GrainGallery1" component={GrainGallery1}/>
        <Stack.Screen name="GrainGallery2" component={GrainGallery2}/>
        <Stack.Screen name="GrainGallery3" component={GrainGallery3}/>
        <Stack.Screen name="GrainGallery4" component={GrainGallery4}/>
        <Stack.Screen name="GrainGallery5" component={GrainGallery5}/>
        <Stack.Screen name="GrainGallery6" component={GrainGallery6}/>
        <Stack.Screen name="GrainGallery7" component={GrainGallery7}/>
        <Stack.Screen name="GrainGallery8" component={GrainGallery8}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
