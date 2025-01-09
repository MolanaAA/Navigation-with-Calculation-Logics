import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Sum from './Sum';
import PercentageCalculator from './percentageCalculator';

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator screenOptions={
            { drawerStyle: { 
              backgroundColor: 'gray',
              width: 250,
             }, drawerLabelStyle: {
              fontSize: 20,
              fontWeight: 'bold',
             } }
          } initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />  {/* Home Screen for buttons */}
          <Drawer.Screen name="Sum" component={Sum} />
          <Drawer.Screen name="Percent" component={PercentageCalculator} />
        </Drawer.Navigator>
      );
};

export default DrawerNavigator;