// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



// const TodoTask = (props) => {
//   return (
//     <ScrollView>
//     <View style={styles.card}>
//        <View style={styles.cardContent}> 
//         <View style={styles.square}>
//         <TouchableOpacity onPress={props.expend}>
//         <MaterialCommunityIcons name= 'chevron-down' color= '#000' size= {25} />
//         </TouchableOpacity>
//         </View>
//         <Text style={styles.centerHeading}>{props.text}</Text>
//       </View>
//       <View ></View>
    
//       <View style={styles.circular}>  
//       <TouchableOpacity key={props.i} onPress={props.press}>
//         <MaterialCommunityIcons name= 'trash-can-outline' color= '#000' size= {25} />
//     </TouchableOpacity>
//     </View>
//     </View>
//     </ScrollView>
//   )
// }

// export default TodoTask
// const styles = StyleSheet.create({
//     card: {
//      elevation: 3,
//      backgroundColor: '#fff',
//      shadowOffset: {width: 1, height:1},
//      shadowColor: '#333',
//      shadowOpacity: 0.3,
//      shadowRadius:2,
//      marginHorizontal:4,
//      marginVertical:6,
//      padding: 5,
//      borderRadius: 10,
//      flexDirection: 'row',
//      alignItems: 'center',
//      justifyContent: 'space-between',
//         },
//     cardContent: {
//      marginHorizontal: 18,
//      marginVertical: 10,   
//      flexDirection: 'row',
//      alignItems: 'center',
//      flexWrap: 'wrap' 
//         },
//     centerHeading: {
//      color: '#000',  
//      textAlign: 'center', 
//      fontSize:20,
//      marginLeft: 30
//         },    
//     text: {
//      fontSize: 22,
//      color: 'black',
//      textAlign: 'center',
//      marginBottom: 10,    
//         },
//     square: {
//      width: 24,
//      height: 24,
//      marginRight: 15,
//     },
//     itemText: {
//       maxWidth: '80%',
//     },
//     circular: {
//       width: 25,
//       height: 30,
//     },
//   });
  
