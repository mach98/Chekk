import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import AuthenticationNavigator from './AuthenticationNavigator';
import OnboardStackNavigator from './OnboardStackNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardNavigator"
        component={OnboardStackNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthenticatorNavigator"
        component={AuthenticationNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
