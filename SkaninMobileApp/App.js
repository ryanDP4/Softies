import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AreYouA from './components/LoginSignUp/AreYouA';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import LoginPage from './components/LoginSignUp/LoginPage';
import SignUp from './components/LoginSignUp/SignUp';
import { useFonts } from 'expo-font';
import Homepage from './components/Homepage';
import Landing from './components/Landing';
import Classification from './components/Classification';
import History from './components/History';
import Summary from './components/Summary';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Screen name="Landing Page" component={Landing}/>
        <Screen name="AreYouA" component={AreYouA} />
        <Screen name="LoginSignUp" component={LoginSignUp} />
        <Screen name="LoginPage" component={LoginPage} />
        <Screen name="SignUpPage" component={SignUp}/>

        <Screen name="Homepage" component={Homepage} />
        <Screen name="Classification Page" component={Classification} />
        <Screen name="History Page" component={History} />
        <Screen name="Summary Page" component={Summary} />
      </Navigator>
    </NavigationContainer>
  );
}
