// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// import HomeScreen from '../Features/HomeScreen';
// import Notification from '../Features/Notification';
// import ProfileScreen from '../Features/ProfileScreen';
// import CoursesDetailsScreen from '../Features/CoursesDetailsScreen';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//         <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="CoursesDetails"
//         component={CoursesDetailsScreen}
//         options={({route}) => ({
//           title: route.params?.title,
//         })}
//       />
//     </Stack.Navigator>
//   );
// };

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {backgroundColor: '#c1e3ca'},
//         tabBarInactiveTintColor: '#fff',
//         tabBarActiveTintColor: '#729875',
//       }}>
//       <Tab.Screen
//         name="Home2"
//         component={HomeStack}
//         options={({route}) => ({
//           tabBarStyle: {
//             display: getTabBarVisibility(route),
//             backgroundColor: '#c1e3ca',
//           },
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name="home-outline" color={color} size={size} />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Notification"
//         component={Notification}
//         options={{
//           tabBarBadge: 3,
//           tabBarBadgeStyle: {backgroundColor: '#729875'},
//           tabBarIcon: ({color, size}) => (
//             <Feather name="bell" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name="person-outline" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const getTabBarVisibility = route => {
//   // console.log(route);
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
//   // console.log(routeName);

//   if( routeName == 'CoursesDetails' ) {
//     return 'none';
//   }
//   return 'flex';
// };

// export default TabNavigator;
