import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Platform,} from "react-native";
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

import * as ImagePicker from 'expo-image-picker';


const ProfileEdit = ({ route, navigation }) => {

  const [image, setImage] = useState("https://pbs.twimg.com/media/F9vfIVQbcAAEcFg?format=jpg&name=small");

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
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    console.log(result.uri)
  };

return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.avatar]}
          onPress={pickImage}
        >
          <Image
            source={{
              uri: image,
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
          style={{ padding: 50, height: 540, justifyContent: "space-between" }}
        >
          <Input
            placeholder={"ชื่อผู้ใช้"}
            onChangeText={(val) => inputValueUpdate(val)}
          />
          <Input
            placeholder={"เบอร์โทรศัพท์"}
            onChangeText={(val) => inputValueUpdate(val)}
            keyboardType={"numeric"}
          />
          <View>
            <Text style={{ fontSize: 18, paddingLeft: 10 }}>ที่อยู่: </Text>
            <TextInput
              style={styles.addressInput}
              placeholder={"ระบุที่อยู่ของคุณ"}
              placeholderTextColor={"gray"}
              onChangeText={(val) => inputValueUpdate(val)}
              // value={(val) => setAddress(val)}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProfileEdit", { prev: "Profile", id: 25 });
            }}
            style={styles.btn}
          >
            <Text style={styles.btninner}>อัพเดตโปรไฟล์</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    top: 18,
  },
  avatar: {
    width: 175,
    height: 175,
    borderRadius: 100,
    alignSelf: "center",
    position: 'relative',
  },
  avatarHovered: {
    opacity: 0.6,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  editIcon: {
    position: 'absolute',
    top: '35%',
    left: '35%',
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
    backgroundColor: colors.sun,
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
