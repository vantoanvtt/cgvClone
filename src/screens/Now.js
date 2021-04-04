import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from "../components/Header";

import Listcarousel from '../components/Listcarousel';
const Now = () => {
    return(
        <View style={{
           
            
        }}>
            <Header />

            <Listcarousel />
        </View>
    )
}

export default Now;