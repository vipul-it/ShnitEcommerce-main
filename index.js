/**
 * @format
 */
import { View, Text } from 'react-native'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

const Root = () => {
  return <App />;
};
AppRegistry.registerComponent(appName, () => Root);
