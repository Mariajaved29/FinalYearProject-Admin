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
import HomeScreen from '../Features/HomeScreen';
import EditContact from '../Features/Contact/EditContact'

import TabNavigator from './TabNavigator';
import TimeTable from '../Features/TimeTable';
import Notification from '../Features/Notification';
import AddRoomScreen from '../Features/AddRoomScreen';
import MessageStackScreen from '../Navigation/MessageStack';
import Posts from '../Container/Posts'
const Drawer = createDrawerNavigator();
const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ContactStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
import CreatePost from '../Container/CreatePost';


const ProfileStackScreen = ({navigation}) => {
  return(
    <ProfileStack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor: '#ebd9b5',
          shadowColor: '#ebd9b5',
          elevation: 0,
        },
      }}>
      <ProfileStack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          title:'Profile',
          headerLeft:() =>(
            <Icon.Button
              name='ios-menu'
              size={25}
              backgroundColor='#ebd9b5'
              color='#000'
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name='account-edit'
              size={25}
              backgroundColor='#ebd9b5'
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

const ContactStackScreen = ({navigation}) => {
  return(
    <ContactStack.Navigator 
    screenOptions={{
      headerStyle:{
        backgroundColor: '#ebd9b5',
        shadowColor: '#ebd9b5',
        elevation: 0,
      },
    }} >
      <ContactStack.Screen
        name='Contacts'
        component={Contact}
        options={{
          title:'Contact',
          headerLeft:() =>(
            <Icon.Button
              name='ios-menu'
              size={25}
              backgroundColor='#ebd9b5'
              color='#000'
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name='square-edit-outline'
              size={25}
              backgroundColor='#ebd9b5'
              color='#000'
              onPress={() => navigation.navigate('EditContact')}
            />
          )
        }}
      /> 
      <ContactStack.Screen 
        name='EditContact'
        component={EditContact}
      />
    </ContactStack.Navigator>
  );
};

const PostStackScreen = ({navigation}) => {
  return(
    <PostStack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor: '#ebd9b5',
          shadowColor: '#ebd9b5',
          elevation: 0,
        },
      }}>
      <PostStack.Screen
        name='Posts'
        component={Posts}
        options={{
          title:'Post',
          headerLeft:() =>(
            <Icon.Button
              name='arrow-back'
              size={25}
              backgroundColor='#ebd9b5'
              color='#000'
              onPress={() => navigation.navigate('HomeScreen')}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name='plus'
              size={25}
              backgroundColor='#ebd9b5'
              color='#000'
              onPress={() => navigation.navigate('CreatePost')}
            />
          )
        }}
      /> 
      <PostStack.Screen 
        name='CreatePost'
        component={CreatePost}
      />
    </PostStack.Navigator>
  );
};

const Dashboard = ({navigation}) => {
  // Stack Navigator for Home Screen
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen" screenOptions={{
      headerStyle:{
        backgroundColor: '#ebd9b5'
       }
    }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
              title:'مدرسہ عربیہ صفہ للبنات',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 25, 
                color: '#b09154', 
              },
              headerLeft:() =>(
                <Icon.Button
                  name='menu'
                  size={25}
                  backgroundColor='#ebd9b5'
                  color='#000'
                  onPress={() => navigation.openDrawer()}  
                />
              ),
              
              headerRight: () => (
                <MaterialCommunityIcons.Button
                  name='bell'
                  size={25}
                  backgroundColor='#ebd9b5'
                  color='#000'
                  badge='3'
                  onPress={() => navigation.navigate('Notification')}
                />
              )
            }}
        />
      <HomeStack.Screen
        name='TimeTable'
        component={TimeTable}
      />
      <HomeStack.Screen
        name='MessagesScreen'
        component={MessageStackScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name='Notification'
        component={Notification}
        onPress={() => navigation.navigate('Notification')}
      />
       <HomeStack.Screen
        name='Post'
        component={PostStackScreen}
        onPress={() => navigation.navigate('Post')}
        options={{
          headerShown: false,
        }}
       
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
            backgroundColor: '#ebd9b5'
          },
          drawerActiveBackgroundColor: '#b09154',
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
          component={ContactStackScreen}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <MaterialCommunityIcons name="contacts-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
  );
};

export default AuthStack;


