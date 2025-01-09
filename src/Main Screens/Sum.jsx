import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Addition from '../screens/Addition';
import AddResult from '../screens/AddResult';


const Stack = createNativeStackNavigator();

const Sum = () => {


  return (

        <Stack.Navigator>
            <Stack.Screen  options={{ headerShown: false }} name='Home'  component={Addition}/>
            <Stack.Screen  options={{ headerShown: false }} name='Result'  component={AddResult}/>
        </Stack.Navigator>

    
  );
};

export default Sum;