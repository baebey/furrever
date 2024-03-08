import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddPost = () => {
  const [image, setImage] = useState("");

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

      <View>
        <Image resizeMode='contain' style={styles.img} source={{ uri: image }}></Image>
      </View>

      {/* Add Post Button */}
      <TouchableOpacity
        style={{ backgroundColor: 'blue', marginTop: 10, padding: 10, alignItems: 'center' }}
      >
        <Text style={{ color: '#fff' }}>Add Post</Text>
      </TouchableOpacity>
    </View>
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
