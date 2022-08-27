import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import OnboardStackNavigator from './src/navigation/OnboardStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <OnboardStackNavigator />
    </NavigationContainer>
  );
};

export default App;
