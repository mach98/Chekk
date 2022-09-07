import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';

import MainScreen from '../screens/MainScreen';
import RedeemPointsScreen from '../screens/RedeemPointsScreen';
import ReportProductScreen from '../screens/ReportProductScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon name="home" size={25} color={color} />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Redeem Points"
        component={RedeemPointsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon2 name="ticket" size={25} color={color} />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Report Product"
        component={ReportProductScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon3 name="profile" size={25} color={color} />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon2 name="clock-time-four-outline" size={25} color={color} />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
