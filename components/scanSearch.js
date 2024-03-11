import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

// Import Icon
import { AntDesign } from "@expo/vector-icons";

const colors = {
  mint: "#bad36d",
  tan: "#e2cc9b",
  sun: "#faaf6b",
  pinky: "#fadacb",
  ivory: "#f8f3df",
};

// Component
const scanSearch = (props) => {
  return (
    <View style={styles.box}>
      <View style={styles.pic}>
        <TouchableOpacity
          style={{ marginLeft: 10, marginRight: 10 }}
          //   onPress={() => navigation.navigate("")}
        >
          <View>
            <Image
              style={styles.pic}
              source={{
                uri: props.pic,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textbox}>
        <Text style={styles.txt}> {props.name} </Text>
        <Text style={styles.txt}> {props.location} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pic: {
    height: 150,
    width: 150,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 15,
  },
  textbox: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default scanSearch;
