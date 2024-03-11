import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, Image } from "react-native";

export default function BtnNewHouse(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Btn}
        activeOpacity={0.5}
        onPress={() => props.onPress()}
      >
        <Image source={props.image} style={styles.ImageIconStyle} />
        <Text style={styles.BtnText}> {props.name} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.29,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Btn: {
    alignItems: "center",
    justifyContent: "center",
  },
  BtnText: {
    marginTop: 5,
    // fontWeight: "bold",
    fontSize: 15,
  },
  ImageIconStyle: {
    width: 80,
    height: 80,
  },
});
