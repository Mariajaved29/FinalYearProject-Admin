import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../Navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';


const CustomDrawer = props => {

  const { user, logout } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const getUser = async() => {
    await firestore()
    .collection('users')
    .doc( user.uid)
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
    // navigation.addListener("focus", () => setLoading(!loading));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#729875' }}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpg')}
          style={{ padding: 20 }}>
          <Image
            source={{uri: userData ? userData.userImg || '../../assets/user.png' : '../../assets/user.png' }}
            // source={user.userImg}
            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
              {userData ? userData.fname || 'Your' : 'Your'} {userData ? userData.lname || 'Name' : 'Name'}
          </Text>
          <View style={{ flexDirection: 'row' }}>

          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>

        <TouchableOpacity onPress={() => logout()} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
