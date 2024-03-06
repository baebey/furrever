
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView, StatusBar, FlatList} from "react-native";
import { RadioButton } from 'react-native-paper'; 
import { Input } from "react-native-elements";


// Import Component
import BoxMyPet from "../components/BoxMyPet";


const ListMyPet = ({ navigation }) => {
    
  const renderItem = ({ item, index }, props) => {
    console.log("item ใน Box 🧧🧧 :",item);

    return (
      <BoxMyPet
        item={item}
        navigation={navigation}
        onSelect={() => {
          console.log("click list ");
          // props.navigation.navigate("ScreenTest")
        }}
      />

    );
  };

  const ItemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];



    return (
 
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

            <FlatList 
                  style={{marginTop:25}}
                  navigation={navigation}
                  data={ItemData}
                  renderItem={(item) => 
                    renderItem(item, { navigation })
                  } 
                  numColumns={1} 
                  keyExtractor={(item, index) => index.toString()}
              />
                        
                    
            </ScrollView>
            {/* เพิ่มสัตว์เลี้ยง */}
            <TouchableOpacity style={{backgroundColor:'#faaf6b', padding:13 ,borderRadius:15, position:'absolute', zIndex:1000, right: 20, bottom: 20}}
              onPress={() => {
                  console.log("กดเพิ่มสัตว์เลี้ยง");
              }}>
                <Text style={{color:'#f8f3df' , fontSize: 14, fontWeight:'bold'}}> + เพิ่มสัตว์เลี้ยง</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )


};
const colors = {
  mint: "#bad36d",
  tan: "#e2cc9b",
  sun: "#faaf6b",
  pinky: "#fadacb",
  ivory: "#f8f3df",
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      // backgroundColor: 'pink',
      marginHorizontal: 25,
    },
    text: {
      fontSize: 42,
    },
});
  



export default ListMyPet;
