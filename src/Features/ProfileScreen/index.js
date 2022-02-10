import React, {useContext, useState, useEffect} from 'react'
import { 
   View,
   Text,
   TouchableOpacity,
   StyleSheet,
   ScrollView,
   StatusBar,
   } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../Navigation/AuthProvider';

const ProfileScreen = ({navigation, route}) => { 

  const {admin} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const getUser = async() => {
    await firestore()
    .collection('admin')
    .doc( route.params ? route.params.adminId : admin.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  useEffect(() => {
    getUser();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

  return (
    <ScrollView>
      <View style={styles.container}>
      <StatusBar backgroundColor='#729875' barStyle='light-content' />
        <View style={styles.picture}>
          <Avatar.Image
            source={{uri: userData ? userData.userImg || '../../assets/user.png' : '../../assets/user.png' }}
            size={80}
            backgroundColor='#fff' />
        </View>
        {/* TextInput fields of Edit profile */}
          
        <View style={styles.action}>
          <FontAwesome name='user' size={20} />
          <Text style={styles.textInput}>
            {userData ? userData.fname || 'Your' : 'Your'} {userData ? userData.lname || 'Name' : 'Name'}
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name='globe' size={20} />
          <Text style={styles.textInput}>
            {userData ? userData.location || 'No details added.' : 'No details added.'}
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name='envelope' size={20} />
          <Text style={styles.textInput}>
            {userData ? userData.email || 'No details added.' : 'No details added.'}
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name='phone' size={20} />
          <Text style={styles.textInput}>
            {userData ? userData.phone || 'No details added.' : 'No details added.'}
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name='book' size={20} />
          <Text style={styles.textInput}>
            {userData ? userData.course || 'No details added.' : 'No details added.'}
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name='bookmark' size={20} />
          <Text style={styles.textInput}>
            {userData ? userData.about || 'No details added.' : 'No details added.'}
          </Text>
        </View>
        {/* End */}
        
        {/* Submit Button */}
        <TouchableOpacity style={styles.commandButton}
          onPress={() => navigation.navigate('EditProfile')
          // , { firstNameData: firstname, })
        } 
        >
          <Text style={styles.panelButtonTitle}>Edit Profile</Text>
        </TouchableOpacity>
        {/* End */}
    
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture:{
    alignItems: 'center',
    marginTop: 30,
    marginBottom:20
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#b09154',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    width: '90%'
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',

  },
  action: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    margin:25
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 17,
    marginLeft:10
  },
});



// import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import React, { useState } from 'react';
// import {
//     Avatar,
//     Title,
//     Caption,
//     Text,
//     TouchableRipple
// } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


// const ProfileScreen = ({navigation}) => {
//   return (
//     <SafeAreaView style={styles.container}>
//         <StatusBar backgroundColor='#729875' barStyle='light-content' />
//         <View style={[styles.userInfoSection, {backgroundColor: '#c1e3ca'}]}>
//             <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15, }}>
//                 <Avatar.Image
//                   source={require('../../assets/user.png')}
//                 size={80}
//                 backgroundColor='#fff' />
//                 <View style={{marginLeft: 20}}>
//                     <Title style={styles.title}>Sobia Mustafa </Title>
//                     <Caption style={styles.caption}>ID- 4716</Caption>
//                 </View>
//             </View>
//         </View>
//         <View style={styles.userInfoSection}>
//             <View style={styles.row}>
//                 <Icon name="map-marker-radius" color= '#777777' size={20} />
//                 <Text style={{color: '#777777', marginLeft: 20}}>Karachi, Pakistan</Text>
//             </View>
//             <View style={styles.row}>
//                 <Icon color= '#777777' name="phone" size={20} />
//                 <Text style={{color: '#777777', marginLeft: 20}}>0345-8756854</Text>
//             </View>
//             <View style={styles.row}>
//                 <Icon color= '#777777' name="email" size={20} />
//                 <Text style={{color: '#777777', marginLeft: 20}}>sobia@gmail.com</Text>
//             </View>
//             <View style={styles.row}>
//                 <Icon color= '#777777' name="cake-layered" size={20} />
//                 <Text style={{color: '#777777', marginLeft: 20}}>18/02/2001</Text>
//             </View>
//             <View style={styles.row}>
//                 <Icon color= '#777777' name="book-open-page-variant" size={20} />
//                 <Text style={{color: '#777777', marginLeft: 20}}>tajweed ul quran</Text>
//             </View>
//         </View>
//         <View style={styles.infoBoxWrapper}>
//             <View style={styles.infoBox}>
//             <Icon color= '#777777' name="bookmark-check" size={20} >
//                 <Title style={{fontSize: 15}}> About</Title>
//                 </Icon>
//                 <Caption style={{fontSize: 13}}>Islam gives a lot of importance to women,  
//                 it teaches that a woman deserves respect and should be treated nicely.</Caption>
//             </View>
//         </View>
//         <View style={styles.menuWrapper}>
//         <TouchableRipple onPress={() => navigation.navigate('EditProfile')}>
//         <View style={styles.menuItem}>
//             <Icon name="account-settings-outline" color='#FF6347' size={25} />
//             <Text style={styles.menuItemText}>Settings</Text>
//         </View>
//         </TouchableRipple>
//         </View>
//     </SafeAreaView>
//   )
// }

// export default ProfileScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   userInfoSection: {
//     paddingHorizontal: 30,
//     marginBottom: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//     fontWeight: '500',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   infoBoxWrapper: {
//       borderBottomColor: '#dddddd',
//       borderBottomWidth: 1,
//       borderTopColor: '#dddddd',
//       borderTopWidth: 1,
//       flexDirection: 'row',
//       height: 150,
//   },
//   infoBox: {
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   menuWrapper: {
//     marginTop: 10,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//   },
//   menuItemText: {
//     color: '#777777',
//     marginLeft: 20,
//     fontWeight: '600',
//     fontSize: 16,
//     lineHeight: 26,
//   },
// });