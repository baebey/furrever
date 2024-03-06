import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PostNewHouse from "../components/postNewHouse";

export default function NewHouse() {
  // Dropdown
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "Thai" },
    { key: "2", value: "Thailand" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttonTop}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 25 }}>สุนัข</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 25 }}>แมง</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postLost}>
        <PostNewHouse
          name="Mon"
          year="4"
          type="สุนัข"
          sex="เพศผู้"
          detail="หาน้องให้บ้านใหม่"
          contact="สถานรับเลี้ยงดอบคำ"
          tel="000-11111111"
        />
        <PostNewHouse
          name="Tom"
          year="4"
          type="สุนัข"
          sex="เพศเมี่ย"
          detail="หาน้องใหม่ให้น้อง"
          contact="Dum"
          tel="000-11111111"
        />
        <PostNewHouse
          name="Jerrie"
          year="2"
          type="สุนัข"
          sex="เพศผู้"
          detail="หาผู้ใจรักใจบุณ"
          contact="นางสาวสำใจหยอก"
          tel="000-11111111"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  buttonTop: {
    flexDirection: "row",
    backgroundColor: "#E2CC9B",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#E2CC9B",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderWidth: 0.5,
  },
  postLost: {
    marginTop: 10,
  },
});