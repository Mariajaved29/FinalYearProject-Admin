import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {

  return (
    <View  style = {styles.container}>
      <Text style = {styles.paragraph}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;

