import { View, Text } from 'react-native'
import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/Navigation/RootNavigator';
// import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';


const App = () => {
 
  return (
   
   <View style={{flex:1}}>
    <Provider store={Store}>
      <RootNavigator/>
    </Provider>
      
   
    </View>
  );
};

export default App;
