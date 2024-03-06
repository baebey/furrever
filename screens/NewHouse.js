import React, { useState, useEffect } from "react";
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
  const [image, setImage] = useState(null); // Default image

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
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
      <View>
        <SelectList
          setSelected={setSelected}
          data={data}
          placeholder="เลือกสัตว์เลี้ยงของคุณ"
        />
      </View>
      <View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <Text>สถานที่ที่คาดว่าหาย</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextPlace}
            value={textPlace}
          />
        </View>

        <View>
          <Text>วันที่ที่หาย</Text>
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
        </View>

        <View>
          <Text>เวลาที่หาย</Text>
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
  Image: {
    width: 200,
    height: 180,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
  },
});