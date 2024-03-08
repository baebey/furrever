import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet, View } from "react-native";
import BtnLostPet from "../components/BtnLostPet";
import PostLostPet from "../components/postLostPet";

export default function PetLost() {
  // Dropdown
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "Thai" },
    { key: "2", value: "Thailand" },
  ];

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.LocationPicker}>
        <SelectList
          setSelected={setSelected}
          data={data}
          placeholder="เลือกสัตว์เลี้ยงของคุณ"
        />
      </View>
      <View style={styles.AllBtn}>
        <BtnLostPet
          name="ทั้งหมด"
          image={require("../assets/AllTypeBtn.png")}
        />
        <BtnLostPet name="แมว" image={require("../assets/CatTypeBtn.png")} />
        <BtnLostPet name="สุนัข" image={require("../assets/DogTypeBtn.png")} />
      </View>
      <View style={styles.postLost}>
        <PostLostPet
          name="Mon"
          year="4"
          type="สุนัข"
          sex="เพศผู้"
          locate="กรุงเทพ"
          tel="000-11111111"
        />
        <PostLostPet
          name="Tom"
          year="4"
          type="สุนัข"
          sex="เพศผู้"
          locate="กรุงเทพ"
          tel="000-11111111"
        />
        <PostLostPet
          name="Jerrie"
          year="2"
          type="สุนัข"
          sex="เพศผู้"
          locate="กรุงเทพ"
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
  AllBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  LocationPicker: {
    borderRadius: 15,
    backgroundColor: "#E2CC9B",
  },
  postLost: {
    marginTop: 10,
  },
});
