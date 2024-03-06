import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';




import TopNav from "../components/TopNav";
import Post from "../components/Post";



// import Component
import Banner from "../components/Banner";
// import Banner from '../components/Banner'

const FeedScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>

          <TopNav/>
          <Banner/>
          <Post/>


      </ScrollView>
      </SafeAreaView>
    );
  };



  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      // backgroundColor: 'pink',
      // marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });
  
export default FeedScreen;