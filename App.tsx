import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccountScreen from './src/screens/AccountScreen';
import GeneralOverviewScreen from './src/screens/GeneralOverviewScreen';
import OnboardingScreens from './src/screens/OnboardingScreens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen name="My Account" component={AccountScreen} />
        <Stack.Screen
          name="General Overview"
          component={GeneralOverviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
