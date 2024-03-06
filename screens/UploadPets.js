import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function UploadPets() {
  // Dropdown
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Kaitoon" },
    { key: "2", value: "Kaotom" },
  ];

  // Image picker
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);
    console.log(image);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // TextInput
  const [textPlace, onChangeTextPlace] = useState("");
  const [textDay, setTextDay] = useState("");
  const [textTime, setTextTime] = useState("");

  // DateTimePicker
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setDate(selectedDate);
      setTextDay(selectedDate.toDateString());
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(Platform.OS === "ios");
    if (selectedTime) {
      setDate(selectedTime);
      setTextTime(selectedTime.toLocaleTimeString());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.LocationPicker}>
        <SelectList
          setSelected={setSelected}
          data={data}
          placeholder="เลือกสัตว์เลี้ยงของคุณ"
        />
      </View>
      <View style={styles.picker}>
        <TouchableOpacity style={styles.ImagePick} onPress={pickImage}>
          {/* <Text>เลือกรูปภาพ</Text> */}
          {image && <Image source={{ uri: image }} style={styles.Image} />}
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.textInput}>
          <Image
            style={styles.iconTextInput}
            source={require("../assets/mapMark.png")}
          />
          <Text>สถานที่ที่คาดว่าหาย</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextPlace}
          value={textPlace}
        />

        <View style={styles.textInput}>
          <Image
            style={styles.iconTextInput}
            source={require("../assets/dayMark.png")}
          />
          <Text>วันที่ที่หาย</Text>
        </View>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput style={styles.input} value={textDay} editable={false} />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <View style={styles.textInput}>
          <Image
            style={styles.iconTextInput}
            source={require("../assets/timeMark.png")}
          />
          <Text>เวลาที่หาย</Text>
        </View>
        <TouchableOpacity onPress={() => setShowTimePicker(true)}>
          <TextInput style={styles.input} value={textTime} editable={false} />
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={date}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </View>
      <View style={styles.buttonPost}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Sent")}
        >
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    marginTop: 50,
  },
  imageContainer: {
    position: "relative",
  },
  LocationPicker: {
    borderRadius: 15,
    backgroundColor: "#E2CC9B",
  },
  picker: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  ImagePick: {
    width: 200,
    height: 180,
    marginTop: 30,
    backgroundColor: "#E2CC9B",
  },
  Image: {
    width: 200,
    height: 180,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#E2CC9B",
    borderRadius: 15,
  },
  textInput: {
    flexDirection: "row",
    marginLeft: 12,
    alignItems: "center",
  },
  iconTextInput: {
    marginRight: 5,
  },
  buttonPost: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#E2CC9B",
    borderWidth: 1,
  },
});
