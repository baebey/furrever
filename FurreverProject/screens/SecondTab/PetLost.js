import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet, View, SafeAreaView , ScrollView , StatusBar, FlatList, Text } from "react-native";
import BtnLostPet from "../../components/BtnLostPet";
import PostLostPet from "../../components/postLostPet";



import LostPetDetails from "../../screens/LostPetDetails";


// หน้าดูสัตว์เลี่้ยงที่หายไป
export default function PetLost({ navigation }) {







  const data_pet = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <PostLostPet
              onSelect={() => {navigation.navigate("LostPetDetails")}}
              name="Mon"
              year="4"
              type="สุนัข"
              sex="เพศผู้"
              locate="กรุงเทพ"
              tel="000-11111111"
            />
  );






  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.AllBtn}>
            <BtnLostPet
              name="ทั้งหมด"
              image={require("../../assets/AllTypeBtn.png")}
            />
            <BtnLostPet name="แมว" image={require("../../assets/CatTypeBtn.png")} />
            <BtnLostPet name="สุนัข" image={require("../../assets/DogTypeBtn.png")} />
          </View>
          <View style={styles.postLost}>

          <FlatList
            data={data_pet}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

        
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    // paddingTop:0,
    backgroundColor: "#fff",
  },
  AllBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  LocationPicker: {
    borderRadius: 15,
    // backgroundColor: "#E2CC9B",
  },
  postLost: {
    marginTop: 10,
  },
});