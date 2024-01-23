/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './main.tsx';
// import Home from './Home.tsx';
import LoginScreen from './login.tsx';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>

      {/*<Tab.Navigator initialRouteName="Home">*/}
      {/*  <Tab.Screen name="Home" component={Home} />*/}
      {/*  <Tab.Screen name="Log-in" component={LoginScreen} />*/}
      {/*</Tab.Navigator>*/}
    </NavigationContainer>
  );
}

export default App;
