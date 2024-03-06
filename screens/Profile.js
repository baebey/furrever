import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      
      <View style={{ paddingBottom: '3%'}}>
          <Image source={{ uri: "https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg",}} style={styles.avatar} />
          {/* <View style={{backgroundColor:'cyan' ,}}> */}
            <View style={styles.txt}>
              <Text style={{ fontSize: 30, alignSelf: "center" }}>Cat</Text>
              <Text style={{ fontSize: 15, color: "grey", alignSelf: "center", paddingTop: 10, }}>
                0929292929
              </Text>
              <Text style={{ fontSize: 15, color: "grey", alignSelf: "center", paddingTop: 10, }}>
                Meow
              </Text>
            </View>
        {/* </View> */}
      </View>
          
        
        
        <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfileEdit", { prev: "Profile", id: 25 });
              }}
              style={styles.btn}
            >
              <Text style={styles.btninner}>แก้ไขโปรไฟล์</Text>
              <Icon name="angle-right" size={20} color="white" />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ListMyPet", { prev: "Profile", id: 25 });
              }}
              style={styles.btn}
            >
              <Text style={styles.btninner}>สัตว์เลี้ยงของฉัน</Text>
              <Icon name="angle-right" size={20} color="white" />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Authen", { prev: "Profile", id: 25 });
              }}
              style={styles.btn}
            >
              <Text style={styles.btninner}>ออกจากระบบ</Text>
              <Icon name="angle-right" size={20} color="white" />
            </TouchableOpacity>
        </View>
        
      
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
    
  },
  header: {
    backgroundColor: colors.mint,
    height: 200,
  },
  avatar: {
    width: 175,
    height: 175,
    borderRadius: 100,
    alignSelf: "center",
    top: -100,
    zIndex:1000,
    position:'absolute',
  },
  txt: {
    alignSelf: "center",
    marginTop: "25%",
    // top: -80,
  },
  btn: {
    backgroundColor: colors.sun,
    borderRadius: 50,
    width: 300,
    height: 70,
    // padding: 30,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  btninner: {
    // backgroundColor:'red',
    color: "white",
    fontSize: 20,
  },
});

export default Profile;