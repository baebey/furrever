import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


// Import Redux
import { useSelector, useDispatch } from "react-redux";





// import Screen
import FeedScreen from '../screens/FeedScreen'

// import Component
import Banner from '../components/Banner'


const HomePage = ({ navigation }) => {

    const documentName = useSelector( (state) => state.myReducer.doc_name ); ; // ชื่อ document ของ user คนนี้
    console.log("🧋🧋🧋" , documentName);


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