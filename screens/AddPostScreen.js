import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform, Alert, SafeAreaView, ScrollView,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Redux
import { useSelector, useDispatch } from "react-redux";

// Firebase
import firebase from "../firebase/firebaseDB";

const colors = {
  mint: "#bad36d",
  tan: "#e2cc9b",
  sun: "#faaf6b",
  pinky: "#fadacb",
  ivory: "#f8f3df",
};


const AddPost = () => {

  // State Input
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  // ข้อมูล User
  const [userName , setUserName] = useState("");
  const [profile_url , setProfile_url] = useState("");
  const [post , setPost] = useState([]);
  


  // Redux
  const documentName = useSelector((state) => state.myReducer.doc_name) || ""; // Default value to an empty string if undefined
  // console.log("documentName 🧧🧧🧧" , documentName);


  const subjCollection_User = firebase.firestore().collection("Users").doc(documentName);
  const getCollection_User = (res) => {
    // res.data() =  {"address": "", "email": "Judas@gmail.com", "password": "1111", "pets": [], "phone": "", "post": [], "profile_url": "", "username": "Judas"}
    console.log(res.data());
    setUserName(res.data().username)
    setProfile_url(res.data().profile_url)
    setPost([...res.data().post])

  }


    

  // ​‌‌‍ขั้น 𝟮 สร้าง 𝗣𝗼𝘀𝘁 ใน 𝗗𝗕 𝗣𝗼𝘀𝘁​⁡
// res.data() = {"comments": [{"ment": "woof woof", "responder": [DocumentReference]}, {"ment": "bark bark", "responder": [DocumentReference]}], "img": "https://firec7c", "txt": "อยากเป้นหมา"}
  const subjCollection_post = firebase.firestore().collection("Post");
  console.log("addPost 🧧🧧🧧");
  console.log(image);
  console.log(text);
          


  
  const addPost = () => {
    console.log("addPost 🧧🧧🧧");
    //⁡⁣⁢⁣ ​‌‌‍ขั้น แรก สร้างชื่อ post ที่ unique แล้วเก็บไว้ใน DB ของ User⁡⁡​
    const timestamp = new Date();
    const formattedTimestamp = timestamp.toISOString().replace(/[:.]/g, '');
    const postName = `${documentName}_${formattedTimestamp}`; // postName เช่น Judas@gmail.com_2024-03-10T114736465Z
    // นำ ชื่อ Post ที่สร้าง มาเก็บไว้ใน Users 
    let newPost = [...post];
    newPost.push(postName) // newPost เช่น newPost =  ["Judas@gmail.com_2024-03-10T122519317Z" , "Judas@gmail.com_2024-03-10T122608354Z"]

    subjCollection_User
    .update({
      posts: newPost,
    })
    .then(() => {
      console.log("User document updated successfully with the new post.");
    })
    .catch((error) => {
      console.error("Error updating user document:", error);
      alert("User not updated. An error occurred.");
    });

    // ​‌‌‍ขั้น 𝟮 สร้าง 𝗣𝗼𝘀𝘁 ใน 𝗗𝗕 𝗣𝗼𝘀𝘁
    // subjCollection_post.doc(postName)
    // .set({
    //     comments: [],
    //     img: image,
    //     txt:text,
    // })
    // .then(() => {
    //     navigation.pop();
    // }).catch(() => {
    //     alert("ยูเซอร์ไม่ถูก Add");
    // })


    
  };




  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (libraryStatus.status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
  
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus.status !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!');
        }
      }
    })();
    subjCollection_User.onSnapshot(getCollection_User);
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log('ImagePicker Result:', result);
  
      if (!result.cancelled) {
        if (result.uri) {
          setImage(result.uri);
          console.log('Image URI:', result.uri);
        } else if (result.assets && result.assets.length > 0) {
          // Alternative approach: Check assets array
          setImage(result.assets[0].uri);
          console.log('Image URI (Alternative):', result.assets[0].uri);
        } else {
          console.log('Error: Image URI is undefined');
        }
      } else {
        console.log('Image selection cancelled');
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };
  
  


  

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ padding: 10 }}>
        {/* User Avatar and Name */}
        <View style={styles.userInfo}>
          <Image source={{ uri: profile_url }} style={styles.userAvatar} />
          <Text style={styles.username}>{userName}</Text>
        </View>

        {/* Area for Typing */}
        <TextInput
          placeholder="เอิ่ม"
          multiline
          onChangeText={setText}
          value={text}
          style={{ marginTop: 10, height: 200, borderWidth: 1, textAlignVertical: 'top', padding: 10, borderColor: '#D9D9D9' }}
        />

        {/* Upload Photo */}
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} onPress={pickImage}>
          <Icon name="camera-outline" size={20} color="#000" />
          <Text style={{ marginLeft: 5 }}>Upload Photo</Text>
        </TouchableOpacity>

        <View >
          <Image resizeMode='contain' style={styles.img} source={{ uri: image }}></Image>
        </View>

        {/* Add Post Button */}
        <TouchableOpacity
          style={{ backgroundColor: colors.sun, padding: 10, alignItems: 'center' }}
          onPress={addPost}
        >
          <Text style={{ color: '#fff' }}>Add Post</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  img: {
    width: '90%',
    height: 300,
    alignSelf: 'center'
  }
});

export default AddPost;