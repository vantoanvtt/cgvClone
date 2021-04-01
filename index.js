/**
 * @format
 */

import {AppRegistry, Group} from 'react-native';
import App from './App';
import Header from './src/components/Header';
import Home from './src/screens/Home';
import ListHotNews from './src/components/ListHotNews';
import Header2 from './src/components/Header2'
import FullNews from './src/screens/FullNews';
import {name as appName} from './app.json';
import Now from './src/screens/Now';

AppRegistry.registerComponent(appName, () => App);
