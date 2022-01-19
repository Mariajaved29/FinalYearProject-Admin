import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import AppStack from '../../Navigation/AppStack';

const HomeScreen = () => {

  return (
    <View  style = {styles.container}>
      <Text>Home Screen</Text>
      {/* <AppStack /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default HomeScreen;

