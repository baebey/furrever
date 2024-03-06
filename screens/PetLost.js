import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import BtnNewHouse from "../components/BtnNewHouse";

export default function NewHouse() {
  // Dropdown
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "Thai" },
    { key: "2", value: "Thailand" },
  ];

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View>
        <SelectList
          setSelected={setSelected}
          data={data}
          placeholder="เลือกสัตว์เลี้ยงของคุณ"
        />
      </View>
      <View style={styles.AllBtn}>
        <BtnNewHouse
          name="ทั้งหมด"
          image={require("../assets/AllTypeBtn.png")}
        />
        <BtnNewHouse name="แมว" image={require("../assets/CatTypeBtn.png")} />
        <BtnNewHouse name="สุนัข" image={require("../assets/DogTypeBtn.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 25,
    marginTop: 50,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  AllBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  //   Btn: { alignContent: "center" },
  //   ImageIconStyle: {
  //     width: 80,
  //     height: 80,
  //   },
});