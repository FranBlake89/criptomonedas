import React from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';

import Login from './pantallas/login/Login';
import SignUp from './pantallas/signUp/SignUp';
import Main from './pantallas/main/Main';


const Stack = createStackNavigator();


export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName = 'Login' >

          <Stack.Screen name = 'Login' component = { Login } 
            options={{
              title: 'Inicio de Sesión',
              headerStyle: {
                backgroundColor: '#5E49E2',
              },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: {
                fontWeight: 'bold',
                marginHorizontal:'25%'
              },
            }}
          />
          <Stack.Screen name = 'SignUp' component = { SignUp } 
            options = {{
              title: 'Registrate',
              headerStyle: {
                backgroundColor: '#FFFFFF',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                marginHorizontal:'20%'               
              },
            }} 
          />
          <Stack.Screen name = 'Main' component = { Main } 
           options={{
            headerShown: false
          }} 
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
