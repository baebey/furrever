import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function UploadPets() {
  // Dropdown
  const [selected, setSelected] = React.useState("");

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
  //TextInput
  const [textPlace, onChangeTextPlace] = React.useState("");
  const [textDay, setTextDay] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };
  const onChangeDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatepicker();
        setTextDay(currentDate.toDateString());
      }
    } else {
      toggleDatepicker();
    }
  };
  const [textTime, setTextTime] = React.useState("");
  const [time, setTime] = React.useState(new Date());
  const [showPickerTime, setShowPickerTime] = useState(false);
  const toggleDatepickerTime = () => {
    setShowPicker(!showPicker);
  };
  const onChangeTime = ({ type }, selectedTime) => {
    if (type == "set") {
      const currentTime = selectedTime;
      setTime(currentTime);

      if (Platform.OS === "android") {
        toggleDatepickerTime();
        setTextDay(currentTime.toDateString());
      }
    } else {
      toggleDatepickerTime();
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
      <View style={styles.picker}>
        <TouchableOpacity style={styles.ImagePick} onPress={pickImage}>
          {/* <Text>เลือกรูปภาพ</Text> */}
          {image && <Image source={{ uri: image }} style={styles.Image} />}
        </TouchableOpacity>
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
          {showPicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              onChange={onChangeDate}
              style={styles.datePicker}
            />
          )}

          {!showPicker && (
            <Pressable onPress={toggleDatepicker}>
              <TextInput
                style={styles.input}
                onChangeText={setTextDay}
                value={textDay}
                editable={false}
              />
            </Pressable>
          )}
        </View>

        <View>
          <Text>เวลาที่หาย</Text>
          {showPickerTime && (
            <DateTimePicker
              mode="time"
              display="spinner"
              value={date}
              onChange={onChangeTime}
              style={styles.datePicker}
            />
          )}
          {!showPicker && (
            <Pressable onPress={toggleDatepickerTime}>
              <TextInput
                style={styles.input}
                onChangeText={setTextTime}
                value={textDay}
                editable={false}
              />
            </Pressable>
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
  picker: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  ImagePick: {
    width: 200,
    height: 180,
    marginTop: 30,
    backgroundColor: "gray",
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
  },
  datePicker: {
    height: 150,
    marginTop: -10,
  },
});
