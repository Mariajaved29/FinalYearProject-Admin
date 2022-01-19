import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {View} from 'react-native';
import CustomDrawer from '../Components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../Features/ProfileScreen';
import MessagesScreen from '../Features/MessagesScreen';
import MomentsScreen from '../Features/MomentsScreen';
import SettingsScreen from '../Features/SettingsScreen';
import RootStack from './RootStack';

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerStyle:{
            backgroundColor: '#c1e3ca'
          },
          drawerActiveBackgroundColor: '#729875',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            // fontWeight: 'light',
            fontSize: 15,
          },
        }}
        >
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
          
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Moments"
          component={MomentsScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="timer-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
  );
};

export default AuthStack;
