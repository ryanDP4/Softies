import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Landing from './Landing';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Classification from './Classification';
import History from './History';
import Summary from './Summary';

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
        <Stack.Screen
          name="Landing Page"
          component={Landing}
        />
        <Stack.Screen name="Home Page" 
          component={Home} 
        />
        <Stack.Screen name="Classification Page" 
          component={Classification} 
        />
        <Stack.Screen name="History Page" 
          component={History} 
        />
        <Stack.Screen name="Summary Page" 
          component={Summary} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
