import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Listcarousel from '../components/Listcarousel';
const Now = () => {
    return(
        <View style={{
            width: 500,
            height: 666,
            flex: 1
        }}>
            <Listcarousel />
        </View>
    )
}

export default Now;