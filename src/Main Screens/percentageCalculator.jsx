import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Calculation from '../screens/Calculation';
import Results from '../screens/Results';

const PercentageCalculator = () => {
    const Stack = createNativeStackNavigator();
    return (
    
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }}  name="Home" component={Calculation} />
          <Stack.Screen name="Result" component={Results} />
        </Stack.Navigator>
      
    );
}

export default PercentageCalculator;