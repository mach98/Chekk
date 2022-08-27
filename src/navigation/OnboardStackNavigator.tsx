import React from 'react';
import {ScreenOne, ScreenTwo, ScreenThree} from '../screens/OnboardingScreens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const OnboardStackNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {height: 0}}}>
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      <Tab.Screen name="ScreenThree" component={ScreenThree} />
    </Tab.Navigator>
  );
};

export default OnboardStackNavigator;
