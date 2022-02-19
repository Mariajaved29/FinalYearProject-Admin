import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity, 
  Image,
  ScrollView,
  FlatList, 
  Modal,
  StatusBar
} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import {TodoList} from "../../Components/ContactTodo/TodoList";
// import AddListModal from "../../Components/ContactTodo/AddListModal";
// import {tempData} from "../../Components/ContactTodo/tempData"

// export default class Contact extends React.Component {
//   state={
//     addTodoVisible : false,
//   }

//   toggleAddTodoModal() {
//     this.setState({addTodoVisible: !this.state.addTodoVisible})
//   }
//   render() {
//     return (
//       <View style={styles.container} >
//         <Modal 
//         animationType="slide" 
//         visible={this.state.addTodoVisible}
//         onRequestClose={() => this.toggleAddTodoModal()}
//         >
//           <AddListModal  closeModal={() => this.toggleAddTodoModal()} 
//           />
//         </Modal>
//         <View style={{ flexDirection: 'row'}}>
//          <View style={styles.divider} />
//          <View style={styles.title}>
//           <Text style={{ fontWeight: '800', fontSize: 20, color: '#b09154' }}>رابطہ کرنے کی تفصیلات</Text>
//          </View>
//          <View style={styles.divider} />
//          </View>
//          <View style={{marginVertical: 48}}>
//            <TouchableOpacity style={styles.addList} 
//            onPress={() => this.toggleAddTodoModal()}>
//              <AntDesign name="plus" size={20} color='#b09154' />
//            </TouchableOpacity>
//          <Text style={styles.add}>تفصیلات شامل کریں۔</Text>
//          </View>
//          <View style={{height: 275, paddingLeft: 32, width: '100%'}}>
//            <FlatList 
//            data={tempData}
//            keyExtractor={item => item.name}
//            vertical={true}
//            showsVerticalScrollIndicator={false}
//            renderItem = {({item}) => 
//            <TodoList list={item} />}
//            keyboardShouldPersistTaps='always'
//            />
//          </View>
//         </View>
//     );
//   }
// }
   


// const styles = StyleSheet.create({
//    container:{
//      flex: 1,
//      backgroundColor: '#fff',
//      alignItems: 'center',
//      justifyContent: 'center'
//    },
//    divider:{
//      backgroundColor: '#ebd9b5',
//      height: 1,
//      flex: 1,
//      alignSelf: 'center'
//    },
//    title: {
//      fontSize: 30,
//      fontWeight: '800',
//      color: '#ebd9b5',
//      paddingHorizontal: 64
//    },
//    addList: {
//      borderWidth: 2,
//      borderColor: '#ebd9b5',
//      borderRadius: 4,
//      padding: 16,
//      alignItems: 'center',
//      justifyContent: 'center'
//    },
//    add: {
//      color: '#b09154',
//      fontWeight: '600',
//      fontSize: 16,
//      marginTop: 8,
     
//    }
// });



const Contact = ({navigation}) => {
  return (
 
    <View style={styles.contactContainer}>
         <StatusBar backgroundColor='#b09154' barStyle='light-content' />
            <View style={styles.bannerContainer}>
            <Image
              source={require('../../assets/01.jpg')}
              style={styles.bannerImage}
            ></Image>
            <View style={styles.bannerShade} />
           
          </View>
        <ScrollView showsVerticalScrollIndicator={false}>  
           <View style={{marginTop:120}}>
             <TouchableOpacity>
           {/* <FontAwesome name='edit' size={30} color='black' style={{marginTop:2, alignSelf: 'center', marginBottom: 5}} />  */}
           </TouchableOpacity> 
            <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                   <FontAwesome name='user' size={22} style={{marginTop:2}} />                   
                   <Text style={{
                        fontSize:15,
                        fontWeight: 'bold',
                        marginLeft:20,
                    }}>عالمہ شائستہ</Text> 
                                </View>  
                            </View>
                            <View style={styles.card}>
                                <View style={{ flexDirection: 'row' }}>
                   <FontAwesome name='phone' size={22} style={{marginTop:2}} />              
                   <Text style={{
                          fontSize:15,
                          fontWeight: 'bold',
                          marginLeft:20
                         }}>0311-2057668</Text> 
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{ flexDirection: 'row' }}>
                   <FontAwesome5Pro name='whatsapp-square' size={22} style={{marginTop:2}} />              
                   <Text style={{
                          fontSize:15,
                          fontWeight: 'bold',
                          marginLeft:20
                         }}>0311-2057668</Text> 
                                </View>
                            </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row' }}>
                   <FontAwesome name='envelope-square' size={22} style={{marginTop:2}} />               
                   {/* <Button onPress={() => Linking.openURL('support@example.com') }
      title="support@example.com" /> */}
                  <Text style={{
                          fontSize:15,
                          fontWeight: 'bold',
                          marginLeft:20
                    }}>suffah.lilbanaat.madarsa@gmail.com</Text>           
                                </View>
                            </View>
                              <View style={styles.card}>
                                <View style={{ flexDirection: 'row' }}>
                   <FontAwesome name='street-view' size={22} style={{marginTop:2}} />               
                   <Text style={{
                   fontSize:15,
                   fontWeight: 'bold',
                   marginLeft:20,
                   height: 50
                }}>سندھ بلوچ سوسایٹی ھاوس نمبر A-265 گلی نمبر3 گلستان جوہر بلاک 12 کراچی</Text>  
                                </View>
                            </View>
        </View>
        <TouchableOpacity style={styles.commandButton}
          onPress={() => navigation.navigate('EditContact')
          // , { firstNameData: firstname, })
        } 
        >
          <Text style={styles.panelButtonTitle}>Edit Contact</Text>
        </TouchableOpacity>
      </ScrollView>
   
        </View>
  );
}

export default Contact;

const styles = StyleSheet.create({

    card:{ 
    // height: 0,
    // overflow: 'hidden', 
    padding: 10, 
    borderColor: '#ededed', 
    borderWidth: 1, 
    margin: 10, 
    marginTop: 0, 
    backgroundColor:"#FFFFFF",
    borderRadius:10,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 5,
    borderWidth:1,
  },
    contactContainer: {
      width: '100%',
      height: '100%',
    },
    bannerContainer: {height: 100, width: '100%'},
    bannerImage: {
      width: '100%',
      height: 200,
      // borderWidth: 2,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      overflow: 'hidden',
      resizeMode: 'cover',
    },
    bannerShade: {
      height: 200,
      width: '100%',
      position: 'absolute',
      left: '0%',
      top: '0%',
      backgroundColor: 'black',
      opacity: 0.3,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      overflow: 'hidden',
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 20,
      alignSelf: 'center',
      width: '70%',
      elevation:10,
      shadowColor: '#b09154',
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 1,
      shadowRadius: 5,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#b09154',
  
    },
    
  });
