import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

// Import Icon
import { AntDesign } from "@expo/vector-icons";

// Component
const postLostPet = (props) => {
  const navigation = props.navigation;

  return (
    <TouchableOpacity
      onPress={() => {
        props.onSelect();
      }}
    >
      <View style={styles.list}>
        {/* ส่วนของรูปภาพ */}

        <Image
          source={{
            uri: "https://media.discordapp.net/attachments/1184089231396716574/1214960360981790730/image_21.png?ex=65fb0302&is=65e88e02&hm=4b2cf485c0e8212e2d2ce2d7d234c9eb8bf5632ddf97872e6a72fa2a092aeb35&=&format=webp&quality=lossless",
          }}
          style={{ width: 150, height: 180 }}
        />

        <View style={{ marginLeft: 20, marginVertical: 10 }}>
          <Text style={{ fontSize: 20 }}>{props.name}</Text>
          <Text style={styles.fontGreySizeSmall}>
            {props.sex}, {props.year} ปี
          </Text>
          <View style={styles.details}>
            <Text style={styles.detail}>รายรละเอียด {props.detail}</Text>
          </View>
          <Text style={styles.fontGreySizeSmall}>
            ติดต่อที่: {props.contact}
          </Text>
          <Text style={styles.fontSizeSmall}>{props.tel}</Text>
        </View>

        <View style={{ position: "absolute", right: 10, zIndex: 10000 }}>
          <AntDesign name="right" size={24} color="grey" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#f8f3df",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 5,
    borderColor: "#e2cc9b",
    borderWidth: 3,
    margin: 5,
  },
  fontGreySizeSmall: {
    fontSize: 13,
    color: "grey",
  },
  fontSizeSmall: {
    fontSize: 13,
  },
  details: {
    backgroundColor: "#faaf6b",
    opacity: 5,
    borderRadius: 15,
    width: "100%",
    marginTop: 3,
    marginBottom: 3,
  },
  detail: {
    height: 50,
    marginTop: 8,
    margin: 5,
    fontSize: 12,
  },
});

export default postLostPet;
