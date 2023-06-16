// import {View, Text} from 'react-native';
// import React from 'react';
// // import HomeScreen from './HomeScreen';
// // import Categories from './Categories';
// // import Explore from './Explore';
// // import Profile from './Profile';

// import {Platform, Image} from 'react-native';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';


// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import {iconConst} from '../../utils/Images';


// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabBar = () => {
//   const Tab = createBottomTabNavigator();
//   return (
//     <>
//       <Tab.Navigator
//         backBehavior="history"
//         initialRouteName="Home"
//         screenOptions={({route: {name}}) => ({
//           tabBarIcon: ({focused, color, size}) => {
//             switch (name) {
//               case 'Home':
//                 return (
//                   <Image
//                     source={iconConst.Home}
//                     style={{tintColor: focused ? '#1AAABC' : 'gray'}}
//                     resizeMode="contain"
//                     className="h-5 w-5"
//                   />
//                 );

//               case 'Categories':
//                 return (
//                   <Image
//                     source={iconConst.Categories}
//                     style={{tintColor: focused ? '#1AAABC' : 'gray'}}
//                     resizeMode="contain"
//                     className="h-5 w-5"
//                   />
//                 );

//               case 'Explore':
//                 return (
//                   <Image
//                     source={iconConst.Explore}
//                     style={{tintColor: focused ? '#1AAABC' : 'gray'}}
//                     resizeMode="contain"
//                     className="h-5 w-5"
//                   />
//                 );
//               case 'Profile':
//                 return (
//                   <Image
//                     source={iconConst.Profile}
//                     style={{tintColor: focused ? '#1AAABC' : 'gray'}}
//                     resizeMode="contain"
//                     className="h-5 w-5"
//                   />
//                 );
//             }
//           },

//           keyboardHidesTabBar: false,
//           tabBarActiveTintColor: '#1AAABC',
//           tabBarInactiveTintColor: 'gray',
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontFamily: '',
//           },
//           tabBarStyle: {
//             borderTopWidth: 0,
//             width: '100%',
//             height: 60,
//             paddingBottom: Platform.OS == 'ios' ? 15 : 4,
//           },
//         })}>
//         <Tab.Screen
//           name={'Home'}
//           options={{headerShown: false}}
//           component={HomeScreen}
//         />
//         <Tab.Screen
//           name={'Categories'}
//           options={{headerShown: false}}
//           component={Categories}
//         />
//         <Tab.Screen
//           name={'Explore'}
//           options={{headerShown: false}}
//           component={Explore}
//         />
//         <Tab.Screen
//           name={'Profile'}
//           options={{headerShown: false}}
//           component={Profile}
//         />
//       </Tab.Navigator>
//     </>
//   );
// };

// export default TabBar;
