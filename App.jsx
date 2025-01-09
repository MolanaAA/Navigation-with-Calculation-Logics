// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import PercentageCalculator from './src/Main Screens/percentageCalculator';
import Sum from './src/Main Screens/Sum';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { Text } from '@react-navigation/elements';
import Home from './src/Main Screens/Home';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
      <NavigationContainer>
         <Drawer.Navigator
        screenOptions={
          { drawerStyle: { 
            backgroundColor: '#fefefe',
            width: 350,
           }, drawerLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
           } }
        }
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name = "Sum" component={Sum} />
          <Drawer.Screen name = "Percent" component={PercentageCalculator}  />
        </Drawer.Navigator>
      </NavigationContainer>
        
  );
};

export default App;


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Button:{
    padding: 20,
    margin: 10,
    backgroundColor:'blue',
    borderRadius: 15,

  },
  ButtonText:{
    fontSize: 20,
    color: 'white',
    fontWeight: '700',

  }
})