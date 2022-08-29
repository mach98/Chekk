import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import GetStarted from '../screens/GetStartedScreen';

export type AuthenticationNavigatorParams = {
  GetStarted: undefined;
};

const Stack = createNativeStackNavigator<AuthenticationNavigatorParams>();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GetStarted" component={GetStarted} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
