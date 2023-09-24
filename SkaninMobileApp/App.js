import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from './Landing';
import Home from './Home';
import Classification from './Classification';
import History from './History';
import Summary from './Summary';
import AreYouA from './Areyoua';
import SignUpForm from './SignUp';
import LogInPage from './LogInPage';
import AccountCreatedPage from './accountCreatedPage';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false 
        }}
        > 
        <Stack.Screen name="Landing Page"
          component={Landing}/>
        <Stack.Screen name="Are You A Page"
          component={AreYouA}/>
        <Stack.Screen name="Sign Up Page"
          component={SignUpForm}/>
        <Stack.Screen name="Account Created Page"
          component={AccountCreatedPage}/>
        <Stack.Screen name="Log In Page"
          component={LogInPage}/>

        <Stack.Screen name="Home Page" 
          component={Home} />
        <Stack.Screen name="Classification Page" 
          component={Classification} />
        <Stack.Screen name="History Page" 
          component={History} />
        <Stack.Screen name="Summary Page" 
          component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
