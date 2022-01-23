import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {View} from 'react-native';
import CustomDrawer from '../Components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../Features/ProfileScreen';
import MessagesScreen from '../Features/MessagesScreen';
import MomentsScreen from '../Features/MomentsScreen';
import SettingsScreen from '../Features/SettingsScreen';
import EditProfile from '../Features/ProfileScreen/EditProfile'

import TabNavigator from './TabNavigator';
import CoursesDetailsScreen from '../Features/CoursesDetailsScreen';
const Drawer = createDrawerNavigator();
const Profile = createNativeStackNavigator();

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
          // component={ProfileStackScreen}
          component={ProfileScreen}
          options={{
            headerShown: false,
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
          name="Courses"
          component={CoursesDetailsScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="book-outline" size={22} color={color} />
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

// const ProfileStackScreen = ({navigation}) => {
//   return(
//   <Profile.Navigator 
//   screenOptions={{
//     headerStyle:{
//       backgroundColor: '#c1e3ca',
//       shadowColor: '#c1e3ca',
//       elevation: 0,
//     },
//   }}>
//     <Profile.Screen
//     name='Profile'
//     component={ProfileScreen}
//     options={{
//       title:'',
//       headerLeft:() =>(
//         <Icon.Button
//         name='ios-menu'
//         size={25}
//         backgroundColor='#c1e3ca'
//         color='#000'
//         onPress={() => navigation.openDrawer()}
//         />
//       ),
//       headerRight: () => (
//         <MaterialCommunityIcons.Button
//         name='account-edit'
//         size={25}
//         backgroundColor='#c1e3ca'
//         color='#000'
//         onPress={() => navigation.navigate('EditProfile')}
//         />
//       )
//     }}
//        /> 
//        <Profile.Screen 
//        name='EditProfile'
//        options={{
//          title: 'Edit Profile'
//        }}
//        component={EditProfile}
//        />
//   </Profile.Navigator>
//   )
// }
export default AuthStack;

