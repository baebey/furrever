import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView , StatusBar} from "react-native";

// Import Icon
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const LostPetDetails = ({ navigation }) => {

  const [gender , setGender] = useState("male")
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        

        {/* ส่วนรูปภาพสัตว์ */}
        <View style={styles.avatarImage}>

          <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position:'absolute' , zIndex:1000 , left: 5, top:10 }}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>

          <Image
              source={{
                uri: "https://www.dexerto.es/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.es/wp-content/uploads/sites/3/2023/10/12/jujutsu-kaisen-season-2-gojo-getting-hit.jpg",
              }}
              
              style={{...styles.avatarImage, height:200}}
            />
            { (gender == "male") ? (
              <Text style={{position:'absolute', zIndex:1000, right:0, bottom:0 , fontSize: 40, fontWeight: 'bold'}}> <Ionicons name="male" size={25} color="black" /> </Text>
              ) : (
                <Text style={{position:'absolute', zIndex:1000, right:0, bottom:0 , fontSize: 40, fontWeight: 'bold'}}> <Ionicons name="female-sharp" size={25} color="black" /> </Text>
            )}
        </View>

        {/* รายละเอียดของสัตว์ */}
        <View style={styles.detail}>


          <Text style={{fontSize: 30}}>แซลม่อน</Text>
          <Text style={{fontSize: 10, color: 'grey'}}>เพศเมีย สายพันธ์ แมวส้ม</Text>
          <Text style={{ fontSize: 13, ...styles.BoxDataSecOne }}>สถานะตอนนี้ : เจอแล้ว</Text>
          
          <View style={styles.BoxDataSecTwo}>
            <Text style={{fontSize: 10, color: 'grey'}}>บริเวณที่หายสาบสูญ</Text>
            <Text style={{fontSize: 16}}> xxxx </Text>
          </View>




          <View style={styles.BoxDataSecTwo}>
            <Text style={{fontSize: 10, color: 'grey'}}>สถานที่</Text>
            <Text style={{fontSize: 16}}>ซอย : xxxx </Text>
            <Text style={{fontSize: 16}}>ตำบล : xxxx </Text>
            <Text style={{fontSize: 16}}>อำเภอ : xxxx </Text>
            <Text style={{fontSize: 16}}>จังหวัด : xxxx </Text>
          </View>

          <View style={styles.BoxDataSecTwo}>
            <Text style={{fontSize: 10, color: 'grey'}}>วันที่คาดว่าหายสาบสูญ</Text>
            <Text style={{fontSize: 16}}>2/3/2567 </Text>
          </View>

          <View style={styles.BoxDataSecTwo}>
            <Text style={{fontSize: 10, color: 'grey'}}>เวลาคาดว่าหายสาบสูญ</Text>
            <Text style={{fontSize: 16}}>12:00 </Text>
          </View>
          
          <View style={{ ...styles.BoxDataSecTwo, backgroundColor: 'white' }}>
            <Text style={{fontSize: 16}}> 📢 ติดต่อได้ที่ :  xxx-xxx-xxxx</Text>
          </View>



          {/* ส่วนของชื่อประกาศ */}
          <View style={styles.AnnouncerName}>
            <View style={{flexDirection: 'row', textAlign:'center', alignItems:'center' }}>
              <Image
                source={{
                  uri: "https://media.discordapp.net/attachments/1014418970679451648/1214853008156917820/BF57178A-9A56-43A7-AF57-E2791A6AE05F.jpg?ex=65fa9f08&is=65e82a08&hm=ba0229a0640abf5a897d1301787bf1573d8dcbbf404efa3d992dc87f67807721&=&format=webp&width=1192&height=670",
                }}
                style={{width:35, height:35 , borderRadius:50}}
              />
              <Text style={{paddingLeft: 15}}>ชื่อคนประกาศ</Text>

            </View>
          </View>


        </View>


        </ScrollView>
      </SafeAreaView>
    );
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
    // marginHorizontal: 20,
  },
  avatarImage : {
    flex:0.5,
    // width: 'auto',
    // height: 300,
    backgroundColor:'red'
  },

  detail: {
    flex:1,
    marginHorizontal: 23,
    marginTop: 20,
  },

  BoxDataSecOne : {
    marginTop:6,
    width: "45%",
    justifyContent:'center',
    textAlign: 'center',
    backgroundColor: '#bad36d',
    borderRadius: 50,
    paddingVertical:7,
    
  },

  BoxDataSecTwo : {
    marginTop:20,
    justifyContent:'center',
    textAlign: 'center',
    backgroundColor: '#fadacb',
    borderRadius: 7,
    paddingVertical:7,
    paddingLeft: 10,
  },

  AnnouncerName : {
    marginVertical: 15,
    // backgroundColor:'cyan',
    alignItems:'flex-end',
    paddingBottom: 15
  }
});

export default LostPetDetails;
