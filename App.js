import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/Navigation/RootNavigator';

import { Provider } from 'react-redux';
import Store from './src/redux/store';


const App = () => {
 
  return (
   
    <Provider store={Store}>
      <RootNavigator/>
    </Provider>
    
  );
};

export default App;
