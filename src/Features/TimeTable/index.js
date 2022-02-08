import React from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';

const TimeTable = () => {

  return (
  
    <SafeAreaView style={styles.container} >
      <View style={{backgroundColor:'#c1e3ca'}}>
     
      <Text>Time Table</Text>
      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default TimeTable;

