import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

// Import Icon
import { AntDesign } from "@expo/vector-icons";


// Component
const postLostPet = (props) => {


  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Ctrl + c มันง่ายนะ แปปๆเสร็จก็จริง แต่ cop โค้ดมาอย่างเดียว แต่ไม่ทำความเข้าใจ ทีหลังก็อย่า cop เลย เพราะมันเละกว่าเดิม");
      }}
    >
      <View style={styles.list}>

        {/* ส่วนของรูปภาพ */}
        <View style={{ flexDirection:'row', backgroundColor:'cyan' , }}>
            <View >
              <Image source={{
                uri: props.pic,
              }}
              style={{ width: 130, height: 180 }} />
            </View>
            <View style={{justifyContent:'space-around', marginLeft:10 , backgroundColor:'pink'}}>
              <Text style={{ fontSize: 20 }}>{props.name}</Text>
              <Text style={styles.fontGreySizeSmall}>{props.sex}, {props.year} ปี</Text>
              <View style={{backgroundColor:'green', paddingVertical:10 , borderRadius:10 , maxWidth:200}}>
                <Text style={{ }}>รายรละเอียด :</Text>
                <Text style={{ }}>{props.detail}</Text>
              </View>
              <Text style={{ fontSize: 10, color: "grey", maxWidth:200 }}>ติดต่อที่: {props.contact}</Text>
              <Text style={styles.fontSizeSmall}><AntDesign name="phone" size={15} color="black" /> {props.tel}</Text>
            </View>
        </View>
        
  
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    // backgroundColor: "#f8f3df",
    backgroundColor:'black',
    flexDirection: "row",
    // alignItems: "center",
    justifyContent:'center',
    borderRadius: 20,
    // padding: 5,
    // borderColor: "#e2cc9b",
    borderWidth: 3,
    // margin: 5,
  },
  // fontGreySizeSmall: {
  //   fontSize: 10,
  //   color: "grey",
  // },
  fontSizeSmall: {
    fontSize: 13,
  },
  details: {
    backgroundColor: "#faaf6b",
    // opacity: 5,
    // borderRadius: 15,
    // width: "100%",
    marginTop: 3,
    marginBottom: 3,
  },
  // detail: {
  //   height: 50,
  //   marginTop: 8,
  //   margin: 5,
  //   fontSize: 12,
  // },
});

export default postLostPet;