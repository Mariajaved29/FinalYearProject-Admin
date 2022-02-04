import React from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TimeTable = () => {
  return (
  
    <SafeAreaView style={styles.container} >
    <ScrollView >
    <View style={styles.cards} >
    <Text style={styles.heading}>درس نظامی (6 سالۂ)</Text>
    <View style = {styles.lineStyle} />
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
      <Text style={{color: "#000000",fontWeight:"bold"}}>وقت (۲:۰۰ تا ۱۰ بجے)</Text>
      <Text >4  گھنٹے</Text>
    </View>
    </View>

    <View style={styles.cards} >
    <Text style={styles.heading}>تخصص فی العربیہ کورس</Text>
    <View style = {styles.lineStyle} />
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
    <Text style={{color: "#000000",fontWeight:"bold"}}> وقت :  8 : 00 تا 2 : 00</Text>
      <Text >6  گھنٹے</Text>
    </View>
    </View>


    <View style={styles.cards} >
    <Text style={styles.heading}>دراسات دينيہ سال اوّل </Text>
    <View style = {styles.lineStyle} />
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
    <Text style={{color: "#000000",fontWeight:"bold"}}>وقت (۲:۰۰ تا ۱۰ بجے)</Text>
      <Text >4  گھنٹے</Text>
    </View>
    </View>



    <View style={styles.cards} >
    <Text style={styles.heading}>تجوید (قاعدہ/قرآن پاک)</Text>
    <View style = {styles.lineStyle} />

    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
    <Text style={{color: "#000000",fontWeight:"bold"}}> وقت :  8 : 00 تا 2 : 00</Text>
      <Text >6  گھنٹے</Text>
    </View>
    </View>


    <View style={styles.cards} >
    <Text style={styles.heading}>دراسات دينيہ سالِ دوم </Text>
    <View style = {styles.lineStyle} />
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
    <Text style={{color: "#000000",fontWeight:"bold"}}>وقت (۲:۰۰ تا ۱۰ بجے)</Text>
      <Text >4  گھنٹے</Text>
    </View>
    </View>
    </ScrollView>
        </SafeAreaView>

      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  days: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 20,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color:"black"
  },
  tableText:{
    color:"white",
    fontSize:20,
    fontWeight:'bold',
    marginLeft:15,
    marginTop:15,
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    marginTop:10,
    marginBottom:10,
  },
  cards:{
    flex:1,  
    height:130,
    width:"95%",
    backgroundColor:"#FFFFFF",
    borderRadius:0,
    padding:10,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 5,
    borderWidth:1,borderColor:'#ededed',
    margin:10
  },
  heading:{
    fontSize:18,
    fontWeight: "bold",
    color:'#000000',
    marginTop:10,
    marginBottom:10
  }
  });

export default TimeTable;

