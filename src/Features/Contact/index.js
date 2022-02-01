import React, {Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';


class Contact extends Component {

    render() {
        return (
            <View style={styles.contactContainer}>
           
            
            <View style={styles.bannerContainer}>
            <Image
              source={require('../../assets/01.jpg')}
              style={styles.bannerImage}
            ></Image>
            <View style={styles.bannerShade} />
           
          </View>
        <ScrollView showsVerticalScrollIndicator={false}>  
           <View style={{marginTop:120}}>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                   <FontAwesome name='user' size={22} style={{marginTop:2}} />                   
                   <Text style={{
                        fontSize:15,
                        fontWeight: 'bold',
                        marginLeft:20
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
                            <Text></Text>
        </View>
      </ScrollView>
          </View>
      
        );   
         };
}
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
    borderRadius:20,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 5,
    borderWidth:1,borderColor:'#ededed', 
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

    commonShadow:
    {
        backgroundColor:"#FFFFFF",
        borderRadius:0,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        borderWidth:1,borderColor:'#ededed',
    }
    
  });

    export default Contact