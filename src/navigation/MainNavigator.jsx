import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home/Home';
import BottomTabNavigator from './bottomTab/BottomTabNavigator';

const MainNavigator = () => {
  // const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
