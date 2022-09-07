import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/MainScreen';
import RedeemPointsScreen from '../screens/RedeemPointsScreen';
import ReportProductScreen from '../screens/ReportProductScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Redeem Points" component={RedeemPointsScreen} />
      <Tab.Screen name="Report Product" component={ReportProductScreen} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
