import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomDrawer from '../Components/CustomDrawer';

import ProfileScreen from '../Features/ProfileScreen';
import MessagesScreen from '../Features/MessagesScreen';
import Contact from '../Features/Contact';
import EditProfile from '../Features/ProfileScreen/EditProfile';
import CoursesDetailsScreen from '../Features/CoursesDetailsScreen';
import BooksDetailsScreen from '../Features/BoooksDetailsScreen';
import HomeScreen from '../Features/HomeScreen'

import TabNavigator from './TabNavigator';
import TimeTable from '../Features/TimeTable';
import Notification from '../Features/Notification';

const Drawer = createDrawerNavigator();
const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const ProfileStackScreen = ({navigation}) => {
  return(
    <ProfileStack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor: '#c1e3ca',
          shadowColor: '#c1e3ca',
          elevation: 0,
        },
      }}>
      <ProfileStack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          title:'',
          headerLeft:() =>(
            <Icon.Button
              name='ios-menu'
              size={25}
              backgroundColor='#c1e3ca'
              color='#000'
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name='account-edit'
              size={25}
              backgroundColor='#c1e3ca'
              color='#000'
              onPress={() => navigation.navigate('EditProfile')}
            />
          )
        }}
      /> 
      <ProfileStack.Screen 
        name='EditProfile'
        options={{
         title: 'Edit Profile'
        }}
        component={EditProfile}
      />
    </ProfileStack.Navigator>
  );
};


const Dashboard = () => {
  // Stack Navigator for Home Screen
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen" screenOptions={{
      headerStyle:{
        backgroundColor: '#c1e3ca'
       }
    }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="TimeTable"
        component={TimeTable}
      />
      <HomeStack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
      />
      <HomeStack.Screen
        name="Notification"
        component={Notification}
        onPress={() => navigation.navigate('Notification')}
      />
    </HomeStack.Navigator>
  );
};

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
          component={Dashboard}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons name="home-variant-outline" size={22} color={color} />
            ),
          }}       
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons name="account-details-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Courses"
          component={CoursesDetailsScreen}
          options={{
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons name="notebook-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Books"
          component={BooksDetailsScreen}
          options={{
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons name="book-multiple-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons name="contacts-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
  );
};

export default AuthStack;

