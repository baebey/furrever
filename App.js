import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewHouse from "./screens/NewHouse";
import PetLost from "./screens/PetLost";
import UploadPets from "./screens/UploadPets";
import Test from "./screens/Test";

export default function App() {
  return (
    <Test />
    // <NewHouse />
    // <PetLost />
    // <UploadPets />

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
