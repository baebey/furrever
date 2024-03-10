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

  // State
  const [image, setImage] = useState("");

  // Redux
  const documentName = useSelector( (state) => state.myReducer.doc_name ); ; // ชื่อ document ของ user คนนี้


  
  const subjCollection = firebase.firestore().collection("Users").doc(documentName);
  const getCollection = (res) => {
      console.log(res.data());  // {"address": "", "email": "Judas@gmail.com", "password": "1111", "pets": [], "phone": "", "posts": [], "profile_url": "", "username": "Judas"}
      const timestamp = new Date();
      const formattedTimestamp = timestamp.toISOString().replace(/[:.]/g, '');
      const postName = `${documentName}_${formattedTimestamp}`; // postName เช่น Judas@gmail.com_2024-03-10T114736465Z
      
      
  }
  
  const addPost = () => {
    console.log(documentName);
    const unsubscribe = subjCollection.onSnapshot(getCollection);
    return () => {
          unsubscribe(); // ในบางกรณี, คุณต้องการทำงานบางอย่าง (เช่น, unsubscribe จาก Firebase, หรือทำความสะอาดข้อมูลที่ไม่ได้ใช้ = Unmounting (การลบ component ออกจาก DOM)
        };
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
          <Image source={require('../assets/user1.jpg')} style={styles.userAvatar} />
          <Text style={styles.username}>Anchisa Cherdsattayanukul</Text>
        </View>

        {/* Area for Typing */}
        <TextInput
          placeholder="คิดไรอยู่จ๊ะ"
          multiline
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