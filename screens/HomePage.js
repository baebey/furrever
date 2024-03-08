import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// import Post from './components/Post'

import { GestureHandlerRootView } from 'react-native-gesture-handler';


// import Screen
import FeedScreen from '../screens/FeedScreen'

// import Component
import Banner from '../components/Banner'


const HomePage = ({ route, navigation }) => {

    console.log("🧋🧋🧋", route.params);


    return (
      // ต้องใช้เพราะมันจะ error ตอนรันบังคับใช้ทำไมไม่รู้อิ gesture

      
      <GestureHandlerRootView style={styles.container}>
        {/* <Banner/> */}
        <FeedScreen navigation={navigation} />
      </GestureHandlerRootView>

    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor:'red',
      top: 20, // อยากแก้ ขนาด มาแก้ตรงนี้ 
      
    },
    scrollView: {
      // backgroundColor: 'pink',
      // marginHorizontal: 20,
    },
  });
  
export default HomePage;