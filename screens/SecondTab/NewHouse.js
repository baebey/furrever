import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

// Import Components
import PostNewHouse from "../../components/postNewHouse";
//firebase
import firebase from "../../firebase/firebaseDB";

export default function NewHouse() {
  // const [dataFromFirebase, setDataFromFirebase] = useState([]);
  const [filteredData, setFilteredData] = useState({
    dog: [],
    cat: [],
  });

  //Tab Header
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "dog", title: "หมา" },
    { key: "cat", title: "แมว" },
  ]);

  //firebase
  const subjCollection = firebase.firestore().collection("Adoption");
  const getCollection = (querySnapshot) => {
    // const data = [];
    const dogData = [];
    const catData = [];
    querySnapshot.forEach((res) => {
      const {
        ani_url,
        name = "Default Name",
        age = "Default Age",
        type = "Default Type",
        gender = "Default Gender",
        txt = "Default Detail",
        caretaker = "Default Caretaker",
        tel = "",
      } = res.data();

      const animal = {
        pic: ani_url,
        name,
        year: age,
        type,
        sex: gender,
        detail: txt,
        contact: caretaker,
        tel,
        id: res.id,
      };
      // console.log(animal);
      if (type.toLowerCase() === "หมา") {
        dogData.push(animal);
      } else if (type.toLowerCase() === "แมว") {
        catData.push(animal);
      }
    });
    // setDataFromFirebase(dogData.concat(catData));
    setFilteredData({
      dog: dogData,
      cat: catData,
    });
  };

  useEffect(() => {
    const unsubscribe = subjCollection.onSnapshot(getCollection);
    return () => {
      unsubscribe();
    };
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ borderBottomColor: "purple", marginVertical: 10 }}>
      <PostNewHouse
        pic={item.pic}
        name={item.name}
        year={item.year}
        type={item.type}
        sex={item.sex}
        detail={item.detail}
        contact={item.contact}
        tel={item.tel}
      />
    </View>
  );

  //Render By type
  const renderScene = SceneMap({
    dog: () => (
      <FlatList
        style={{ paddingHorizontal: 15 }}
        data={filteredData.dog}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    ),
    cat: () => (
      <FlatList
        style={{ paddingHorizontal: 15 }}
        data={filteredData.cat}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    ),
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "purple" }}
      style={{ backgroundColor: colors.mint }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const colors = {
  mint: "#bad36d",
  tan: "#e2cc9b",
  sun: "#faaf6b",
  pinky: "#fadacb",
  ivory: "#f8f3df",
};

const styles = StyleSheet.create({
  containerSafe: {
    // backgroundColor: "red",
  },
  scrollView: {
    // backgroundColor: 'pink',
  },
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
