import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Features/SplashScreen';
import WelcomeScreen from '../Features/WelcomeScreen';
import SignInScreen from '../Features/SignInScreen';
import SignUpScreen from '../Features/SignUpScreen';
// import HomeScreen from '../Features/HomeScreen';
import AuthStack from './AppStack';


const Root = createNativeStackNavigator();

const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
      <Root.Navigator initialRouteName="WelcomeScreen">
        <Root.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Root.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Root.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Root.Navigator>
    );
  };
  
const RootStack = ({navigation}) => (
  
    // <Root.Navigator headerMode='none' screenOptions={{
    //     headerStyle:{
    //         backgroundColor: '#c1e3ca'
    //     },
    //     headerTinColor: 'black',
    //     headerTinStyle:{
    //         fontWeight: 'bold'
    //     }
    // }}>
    //     <Root.Screen name="WelcomeScreen" component={WelcomeScreen}
    //     options={{ headerShown: false }} />
    //     <Root.Screen name="SignInScreen" component={SignInScreen}
    //     options={{ title:'' }}/>
    //     <Root.Screen name="SignUpScreen" component={SignUpScreen}
    //     options={{ title:'' }} />
    //     <Root.Screen name="HomeScreen" component={HomeScreen}
    //     options={{ title:'Home' }} />
    //     </Root.Navigator>

      <Root.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen */}
        <Root.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Welcome Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Root.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Root.Screen
          name="AuthStack"
          component={AuthStack}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Root.Navigator>
    
   
);

export default RootStack;