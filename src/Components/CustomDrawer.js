import React, { useContext } from 'react';
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

const CustomDrawer = props => {

  // const { user, logout } = useContext(AuthContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#729875' }}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpg')}
          style={{ padding: 20 }}>
          <Image
            source={require('../assets/images/user-profile.jpg')}
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
            {user.email}
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
