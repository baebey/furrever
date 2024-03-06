import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        source={{
          uri: "https://pbs.twimg.com/media/F9vfIVQbcAAEcFg?format=jpg&name=small",
        }}
        style={styles.avatar}
      />
      <View style={styles.txt}>
        <Text style={{ fontSize: 30, alignSelf: "center" }}>อยากเป้นหมา29</Text>
        <Text style={{ fontSize: 15, color: "grey", alignSelf: "center", paddingTop: 10, }}>
          0929292929
        </Text>
        <Text style={{ fontSize: 15, color: "grey", alignSelf: "center", paddingTop: 10, }}>
          ที่นี่ที่ไหน, ใช่ในใจเทอรึป่าว
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProfileEdit", { prev: "Profile", id: 25 });
        }}
        style={styles.btn}
      >
        <Text style={styles.btninner}>แก้ไขโปรไฟล์</Text>
        <Icon name="angle-right" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProfileEdit", { prev: "Profile", id: 25 });
        }}
        style={styles.btn}
      >
        <Text style={styles.btninner}>สัตว์เลี้ยงของฉัน</Text>
        <Icon name="angle-right" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProfileEdit", { prev: "Profile", id: 25 });
        }}
        style={styles.btn}
      >
        <Text style={styles.btninner}>ออกจากระบบ</Text>
        <Icon name="angle-right" size={20} color="white" />
      </TouchableOpacity>
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
  },
  header: {
    backgroundColor: colors.mint,
    height: 200,
  },
  avatar: {
    width: 175,
    height: 175,
    borderRadius: 100,
    alignSelf: "center",
    top: -100,
  },
  txt: {
    alignSelf: "center",
    top: -80,
  },
  btn: {
    backgroundColor: colors.sun,
    borderRadius: 50,
    width: 300,
    height: 70,
    padding: 30,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  btninner: {
    color: "white",
    fontSize: 22,
  },
});

export default Profile;
