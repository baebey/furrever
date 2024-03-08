import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

// Import Icon
import { AntDesign } from "@expo/vector-icons";

const colors = {
  mint: "#bad36d",
  tan: "#e2cc9b",
  sun: "#faaf6b",
  pinky: "#fadacb",
  ivory: "#f8f3df",
};


// Component
const postLostPet = (props) => {


  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Ctrl + c มันง่ายนะ แปปๆเสร็จก็จริง แต่ cop โค้ดมาอย่างเดียว แต่ไม่ทำความเข้าใจ ทีหลังก็อย่า cop เลย เพราะมันเละกว่าเดิม");
      }}
    >
      <View style={styles.list}>

        {/* <View style={{ flexDirection:'row', backgroundColor:'cyan' , borderRadius: 20, borderWidth:3 }}> */}


            {/* ส่วนของรูปภาพด้านซ้าย */}
            <View >
              <Image source={{
                uri: props.pic,
              }}
              style={{ width: 130, height: 200, borderRadius:17 }} />
            </View>

            {/* ส่วนของข้อมูลด้านขวา */}
            <View style={{ justifyContent:'space-around',  }}>
              <Text style={{ fontSize: 20 }}>{props.name}</Text>
              <Text style={styles.fontGreySizeSmall}>{props.sex}, {props.year} ปี</Text>
              <View style={{backgroundColor: colors.sun, paddingVertical:10 , borderRadius:10 , maxWidth:170 , minWidth:170}}>
                <Text style={{ }}>รายรละเอียด :</Text>
                <Text style={{ }}>{props.detail}</Text>
              </View>
              <Text style={{ fontSize: 10, color: "grey",  maxWidth:170 , minWidth:170 }}>ติดต่อที่: {props.contact}</Text>
              <Text style={styles.fontSizeSmall}><AntDesign name="phone" size={15} color="black" /> {props.tel}</Text>
            </View>
        </View>
        
  
        
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    // backgroundColor: "#f8f3df",
    // backgroundColor:'black',
    flexDirection: "row",
    // alignItems: "center",
    justifyContent:'space-between',
    borderRadius: 20,
    // padding: 5,
    // borderColor: "#e2cc9b",
    borderWidth: 3,
    // margin: 5,
  },
  fontGreySizeSmall: {
    fontSize: 12,
    color: "grey",
  },
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