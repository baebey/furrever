import React, { useEffect, useState } from 'react';
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

// Redux
import { useSelector, useDispatch } from "react-redux";

// Firebase
import firebase from "../firebase/firebaseDB";


const Profile = ({ navigation }) => {

  const documentName = useSelector( (state) => state.myReducer.doc_name ); ; // ชื่อ document ของ user คนนี้

  //*-----------------เพิ่มตรงนี้-----------------//
  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [profile, setProfile] = React.useState("");
  
  const [myPets, setMyPets] = React.useState([]);

  const userData = firebase.firestore().collection("Users");

  const userID = documentName;

  const getCollection = (querySnapshot) => {
    querySnapshot.forEach((res) => {
      // console.log("res: ", res.id); 
      // console.log("res.data() : ", res.data()); 
        
        if(res.id === userID){
          setUsername(res.data().username);
          setPhone(res.data().phone);
          setAddress(res.data().address);
          setProfile(res.data().profile_url);
          setMyPets(res.data().pets);
          console.log("........🦣🦣🦣 =" , myPets)
        }
        
    });
  };

  useEffect(() => {
    const unsubscribe = userData.onSnapshot(getCollection);
    return () => {
      unsubscribe();
    };
  }, []);
  //*-----------------------------------------//



  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.header}></View>
      
      <View style={{ paddingBottom: '3%'}}>
          <Image source={{ uri:
            profile 
            ,}} style={styles.avatar} />
          {/* <View style={{backgroundColor:'cyan' ,}}> */}
            <View style={styles.txt}>
              <Text style={{ fontSize: 30, alignSelf: "center" }}>{ username }</Text>
              <Text style={{ fontSize: 15, color: "grey", alignSelf: "center", paddingTop: 10, }}>
                { phone }
              </Text>
              <Text style={{ fontSize: 15, coloAr: "grey", alignSelf: "center", paddingTop: 10, }}>
              { address }
              </Text>
            </View>
        {/* </View> */}
      </View>
          
        
        
        <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfileEdit", { prev: "Profile", userInfo: userData, userID: userID});
              }}
              style={styles.btn}
            >
              <Text style={styles.btninner}>แก้ไขโปรไฟล์</Text>
              <Icon name="angle-right" size={20} color="white" />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ListMyPet", { prev: "Profile", myPets: myPets, userID: userID });
              }}
              style={styles.btn}
            >
              <Text style={styles.btninner}>สัตว์เลี้ยงของฉัน</Text>
              <Icon name="angle-right" size={20} color="white" />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Authen", { prev: "Profile", });
              }}
              style={styles.btn}
            >
              <Text style={styles.btninner}>ออกจากระบบ</Text>
              <Icon name="angle-right" size={20} color="white" />
            </TouchableOpacity>
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
    height: 65,
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