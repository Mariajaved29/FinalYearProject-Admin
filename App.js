import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RootStack from './src/Navigation/RootStack';
import AppStack from './src/Navigation/AppStack';

function App() {
  return (
    <NavigationContainer>
      < RootStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  );
}

export default App;
