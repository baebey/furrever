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
            uri: props.pic,
          }}
          style={{ width: 120, height: 120 }}
        />

        <View style={{ marginLeft: 20, marginVertical: 10 }}>
          <Text style={{ fontSize: 20 }}>{props.name}</Text>
          <Text style={styles.fontGreySizeSmall}>
            {props.year} ปี, {props.type}
          </Text>
          <Text style={styles.fontGreySizeSmall}>{props.sex}</Text>
          <Text style={styles.fontGreySizeSmall}>{props.locate}</Text>
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
    fontSize: 15,
    color: "grey",
  },
  fontSizeSmall: {
    fontSize: 15,
  },
});

export default postLostPet;
