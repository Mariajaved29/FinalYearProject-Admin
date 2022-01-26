import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RootStack from './src/Navigation/RootStack';
import AppStack from './src/Navigation/AppStack';
import Providers from './src/Router';

function App() {
  return <Providers />
    {/* <NavigationContainer>
      < RootStack />
      <AppStack />
    </NavigationContainer> */}
}

export default App;
