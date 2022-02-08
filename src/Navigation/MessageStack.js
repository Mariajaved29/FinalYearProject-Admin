import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import MessagesScreen from '../Features/MessagesScreen';
import AddRoomScreen from '../Features/AddRoomScreen';
import RoomScreen from '../Features/RoomScreen';
import HomeScreen from '../Features/HomeScreen';

//  Navigation stack for chat related screens

const ChatStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();

//  Navigation stack for chat related screens
const ChatScreens = () =>{
  
    return(
      <ChatStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#729875'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontSize: 22
            }
        }}>
        <ChatStack.Screen 
            name='Messages'
            component={MessagesScreen}
            options={({navigation}) => ({
                headerRight: () => (
                    <IconButton
                        icon='message-plus'
                        size={28}
                        color='#ffffff'
                        onPress={() => navigation.navigate('AddRoom')}
                    />
                )
            })}
        />
        <ChatStack.Screen
            name='Room'
            component={RoomScreen}
            options={({ route }) => ({
                title: route.params.thread.name
            })}
        />
        </ChatStack.Navigator>
    );
  };

const MessageStackScreen = () => {
  return(
    <MessageStack.Navigator mode='model' headerMode='none'>
      <MessageStack.Screen 
        name='ChatScreens' 
        component={ChatScreens}
        options={{
          headerShown: false
        }}
      />
      <MessageStack.Screen 
        name='AddRoom'
        component={AddRoomScreen}
      />
    </MessageStack.Navigator>
  );
};

export default MessageStackScreen;
