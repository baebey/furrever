import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ScanSearch from "../components/scanSearch";

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
            ผลการค้นหา...
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
            สัตว์ที่ใก้เคียงกับรูปที่ท่านแสกน
          </Text>

          <ScanSearch
            name="น้องจุบเม่ง"
            location="สมุทรปราการ"
            pic="https://cdn.discordapp.com/attachments/1055019951758516294/1214877591039905802/Z.png?ex=65fab5ed&is=65e840ed&hm=1f853f5fae95690e83142845710d4692756e31abe00666ef13a01c5f50ef1f9c"
          />
          <ScanSearch
            name="น้องชีส"
            location="นนทบุรี"
            pic="https://cdn.discordapp.com/attachments/1055019951758516294/1214877591039905802/Z.png?ex=65fab5ed&is=65e840ed&hm=1f853f5fae95690e83142845710d4692756e31abe00666ef13a01c5f50ef1f9c"
          />
          <ScanSearch
            name="น้องสายไหม"
            location="ชลบุรี"
            pic="https://cdn.discordapp.com/attachments/1055019951758516294/1214877591039905802/Z.png?ex=65fab5ed&is=65e840ed&hm=1f853f5fae95690e83142845710d4692756e31abe00666ef13a01c5f50ef1f9c"
          />
          <ScanSearch
            name="น้องเนย"
            location="กรุงเทพฯ"
            pic="https://cdn.discordapp.com/attachments/1055019951758516294/1214877591039905802/Z.png?ex=65fab5ed&is=65e840ed&hm=1f853f5fae95690e83142845710d4692756e31abe00666ef13a01c5f50ef1f9c"
          />
          <ScanSearch
            name="น้องแซลม่อน"
            location="กรุงเทพฯ"
            pic="https://cdn.discordapp.com/attachments/1055019951758516294/1214877591039905802/Z.png?ex=65fab5ed&is=65e840ed&hm=1f853f5fae95690e83142845710d4692756e31abe00666ef13a01c5f50ef1f9c"
          />
          <ScanSearch
            name="น้องโบ้"
            location="กรุงเทพฯ"
            pic="https://cdn.discordapp.com/attachments/1055019951758516294/1214877591039905802/Z.png?ex=65fab5ed&is=65e840ed&hm=1f853f5fae95690e83142845710d4692756e31abe00666ef13a01c5f50ef1f9c"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EEEE",
    alignItems: "center",
    justifyContent: "center",
  },
  scoll: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    //height: 250,
    width: 150,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4EEEE",
    margin: 10,
  },
  //   pic: {
  //     height: 150,
  //     width: 150,
  //     borderRadius: 10,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     backgroundColor: "white",
  //     marginBottom: 5,
  //   },
  txt: {
    fontSize: 16,
  },
});

export default ScanScreen;
