import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {

  return (
    <View  style = {styles.container}>
      <Text style = {styles.paragraph}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    // padding: 100,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
