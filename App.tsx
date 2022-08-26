import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccountScreen from './src/screens/AccountScreen';
import GeneralOverviewScreen from './src/screens/GeneralOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
