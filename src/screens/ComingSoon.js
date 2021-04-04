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
const ComingSoon = () => {
    return(
        <View>
        <Header />
            <Listcarousel />
        </View>
    )
}

export default ComingSoon;