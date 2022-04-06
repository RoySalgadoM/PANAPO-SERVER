import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/Modulo1/Login"
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        </NavigationContainer>
  )
}