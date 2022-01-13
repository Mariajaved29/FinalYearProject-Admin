import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const HomePage = () => {

  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={{textAlign: 'center'}}>Hello world</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;