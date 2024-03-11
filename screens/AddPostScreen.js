import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform, Alert, SafeAreaView, ScrollView,StatusBar, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';





// Storage เรื่อง Upload รูป
import { storage } from '../firebase/testDatabase';
import { getDownloadURL ,uploadBytes, ref, deleteObject } from 'firebase/storage';


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


const AddPost = ({ navigation }) => {

  // State Input
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  // const [isloading, setloading] = useState(false)
  const [imageUpload, setImageUpload] = useState("");

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
    subjCollection_post.doc(postName)
    .set({
        comments: [],
        img: imageUpload,
        txt: text,
        likes:0,
        countComment:0,
        poster:documentName,
    })
    .then(() => {
        navigation.pop();
    }).catch(() => {
        alert("ยูเซอร์ไม่ถูก Add");
    })



    
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
    console.log("pickImage 🟢🟢🟢");
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      
  
      console.log('ImagePicker Result:', result);
      setImageUpload(result.uri);
      
      if (!result.canceled) {
        
        console.log("result.assets[0].uri ", result.assets[0].uri );
        const uploadURL = await uploadImageAsync(result.assets[0].uri)
        setImageUpload(uploadURL);
        console.log("image 🎋🎋 => ",uploadURL); // ได้ url มาตรงupload
        // setInterval(() => {
        //   setloading(false)
        // }, 1000);
      }

      else{
        console.log("ทำไม");
        setImageUpload(null)
        // setInterval(()=>{
        //   setloading(false);
        // },2000);
      }

    } 
    catch (error) {
      console.error('ทำไมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม:', error);
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

    try{
      const storageRef = ref(storage, `Posts/image-`+Date.now());
      //  uploadBytes เป็น ฟังชัน upload ไปยัง storage
      const result = await uploadBytes(storageRef, blob);

      // We're done with the blob, close and release it
      blob.close();
      return await getDownloadURL(storageRef);

    }catch(err){
      alert(err+"")
    }
   };


    
  
  


  

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{ padding :15, }}>
        <View style={{ padding: 10,  }}>
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
          <View style={{  paddingTop: 20, }}>
            
            {
              imageUpload && (<Image source={{ uri: imageUpload,}} style={{
                width: '90%',
                height: 200,
                alignSelf: 'center'
              }} />)
            }
          </View>

            {/* Add Post Button */}
          <TouchableOpacity
            style={{ backgroundColor: colors.sun, padding: 10, alignItems: 'center', marginTop: "5%" }}
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