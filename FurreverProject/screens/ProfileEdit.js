import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Platform, SafeAreaView , ScrollView , StatusBar } from "react-native";
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

import * as ImagePicker from 'expo-image-picker';


// Alert
import { Alert } from 'react-native';

// Firebase
import firebase from "../firebase/firebaseDB";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Storage เรื่อง Upload รูป
import { storage } from '../firebase/testDatabase';
import { getDownloadURL ,uploadBytes, ref, deleteObject } from 'firebase/storage';


const ProfileEdit = ({ route, navigation }) => {

  //*-----------------แก้ตรงนี้-----------------//
  const userData = route.params.userInfo;
  const userID = route.params.userID;

  // console.log("userData" , userData);
  console.log("userID" , userID);


  const documentName = useSelector( (state) => state.myReducer.doc_name ); ; // ชื่อ document ของ user คนนี้


  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [profile, setProfile] = React.useState(null);


  const showCancelableAlert = () => {
    Alert.alert(
      'ยืนยันการแก้ไข',
      '',
      [
        {
          text: 'OK',
          onPress: () => updateProfile(),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel', // This makes the button look like a "cancel" button
        },
      ],
      { cancelable: true }
    );
  };


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      try {
        const uploadURL = await uploadImageAsync(result.assets[0].uri);
        setProfile(uploadURL);
        console.log("image => ", uploadURL);
      } catch (error) {
        console.error("Error uploading image: ", error);
        setProfile(null);
      }
    } else {
      setProfile(null);
    }
  };

  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    try {
      const storageRef = ref(storage, `Img/profile-${Date.now()}`);
      const result = await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(storageRef);
      blob.close();
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image to storage: ", error);
      throw error;
    }
  };

  //*-----------------------------------------//

  const subjCollection_userData = firebase.firestore().collection("Users").doc(documentName);
  useEffect(() => {
    const unsubscribe = subjCollection_userData.onSnapshot(getCollection);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const libraryStatus =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (libraryStatus.status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }

        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus.status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    })();
  }, []);

  const [bf_username, setbfUsername] = React.useState("");
  const [bf_phone, setbfPhone] = React.useState("");
  const [bf_address, setbfAddress] = React.useState("");
  const [bf_profile, setbfProfile] = React.useState(null);

  const getCollection = (res) => {
  
// res.data() = {"address": "บ้าน", "email": "64070257@kmitl.ac.th", "password": "1111", "pets": [" uwuหมอโง่"], "phone": "0876161934", "post": [], "posts": ["64070257@kmitl.ac.th_2024-03-11T130159648Z"], "profile_url": "https://staticg.s=840", "username": "gojo"}
      setUsername(res.data().username);
      setPhone(res.data().phone);
      setAddress(res.data().address);
      setProfile(res.data().profile_url);

      setbfUsername(res.data().username);
      setbfPhone(res.data().phone);
      setbfAddress(res.data().address);
      setbfProfile(res.data().profile_url);
  };


   

  const updateProfile = () => {
    console.log("update");

    // setbfUsername(username);
    // setbfPhone(phone);
    // setbfAddress(address);
    // setbfProfile(profile_url);

    const userDoc = firebase.firestore().collection("Users").doc(documentName);
    userDoc
      .update({
        username: username,
        phone: phone,
        address: address,
        profile_url: profile,
      })
      .then(() => {
        console.log("อัพเดต");
        navigation.pop();
      })
      .catch((error) => {
        console.error("เกิดไรขึ้น? ", error);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={[styles.avatar]} onPress={pickImage}>
            <Image
              source={{
                uri: profile,
              }}
              style={styles.avatarImage}
            />
            <Icon
              name="image"
              size={50}
              color="white"
              style={styles.editIcon}
            />
          </TouchableOpacity>

          <View
            style={{
              padding: 50,
              height: 540,
              justifyContent: "space-between",
            }}
          >
            <Input
              placeholder={"ชื่อผู้ใช้"}
              onChangeText={(val) => setUsername(val)}
              value={username}
            />
            <Input
              placeholder={"เบอร์โทรศัพท์"}
              onChangeText={(val) => setPhone(val)}
              value={phone}
              keyboardType={"numeric"}
            />
            <View>
              <Text style={{ fontSize: 18, paddingLeft: 10 }}>ที่อยู่: </Text>
              <TextInput
                style={styles.addressInput}
                placeholder={"ระบุที่อยู่ของคุณ"}
                placeholderTextColor={"gray"}
                onChangeText={(val) => setAddress(val)}
                value={address}
                multiline={true}
                numberOfLines={4}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                showCancelableAlert()
                // updateProfile();
                // navigation.pop();
              }}
              
              // disabled ปุ่มอัพเดตถ้ายูสเส้อไม่ได้แก้ไขไร
              style={[
                styles.btn,
                {
                  backgroundColor: username === bf_username && phone === bf_phone && address === bf_address && profile === bf_profile ? 'gray' : colors.sun,
                  opacity: username === bf_username && phone === bf_phone && address === bf_address && profile === bf_profile ? 0.5 : 1,
                }
              ]}
              disabled={
                username === bf_username &&
                phone === bf_phone &&
                address === bf_address &&
                profile === bf_profile
              }
            >
              <Text style={styles.btninner}>อัพเดตโปรไฟล์</Text>
            </TouchableOpacity>
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
    paddingTop: 15,
    // top: 5,
  },
  avatar: {
    width: 175,
    height: 175,
    borderRadius: 100,
    alignSelf: "center",
    position: "relative",
  },
  avatarHovered: {
    opacity: 0.6,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  editIcon: {
    position: "absolute",
    top: "35%",
    left: "35%",
  },
  addressInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 20,
    height: 150,
    fontSize: 18,
    textAlignVertical: "top",
  },
  btn: {
    backgroundColor: "#faaf6b",
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 15,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btninner: {
    color: "white",
    fontSize: 20,
  },
});


export default ProfileEdit;