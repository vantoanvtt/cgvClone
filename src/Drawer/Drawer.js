import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';
import ComingSoon from '../screens/ComingSoon';
import Now from '../screens/Now';
import Special from '../screens/Special';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="now" component={Now} />
      <Tab.Screen name="Special" component={Special} />
      <Tab.Screen name="comingSoon" component={ComingSoon} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerPosition="right">
      <Drawer.Screen name="Home" component={tabs} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
