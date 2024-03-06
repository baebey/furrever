
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView, StatusBar,} from "react-native";
import { RadioButton } from 'react-native-paper'; 
import { Input } from "react-native-elements";




const screenTest = ({ navigation }) => {
    const navigateToLostPetDetails = () => {
        console.log("Navigate to LostPetDetails");
        navigation.navigate('LostPetDetails');
      };


    return (

      <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <TouchableOpacity onPress={navigateToLostPetDetails} >
                <Text >Go to LostPetDetails</Text>
              </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
 

        
        
    )


};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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



export default screenTest;
