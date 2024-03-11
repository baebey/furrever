import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
} from "react-native";
import BtnLostPet from "../../components/BtnLostPet";
import PostLostPet from "../../components/postLostPet";
import { SceneMap, TabView } from "react-native-tab-view";

//firebase
import firebase from "../../firebase/firebaseDB";

export default function PetLost({ navigation }) {
  const [filteredData, setFilteredData] = useState({
    dog: [],
    cat: [],
    all: [],
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "ทั้งหมด" },
    { key: "cat", title: "แมว" },
    { key: "dog", title: "สุนัข" },
  ]);

  //firebase
  const subjCollection = firebase.firestore().collection("Pets");

  const getCollection = (querySnapshot) => {
    const dogData = [];
    const catData = [];
    const allData = [];

    querySnapshot.forEach((res) => {
      const {
        pet_url,
        pet_name = "Default Name",
        age = "Default Age",
        type = "Default Type",
        gender = "Default Gender",
        nose_url,
      } = res.data();

      const animal = {
        pic: pet_url,
        name: pet_name,
        year: age,
        type,
        sex: gender,
        location: "",
        tel: "",
        id: res.id,
        nose_url,
      };
      console.log(animal);
      allData.push(animal);
      if (type.toLowerCase() === "หมา") {
        dogData.push(animal);
      } else if (type.toLowerCase() === "แมว") {
        catData.push(animal);
      }
    });

    setFilteredData({
      dog: dogData,
      cat: catData,
      all: allData,
    });
  };
  console.log(index);
  useEffect(() => {
    const unsubscribe = subjCollection.onSnapshot(getCollection);
    return () => {
      unsubscribe();
    };
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ borderBottomColor: "purple", marginVertical: 10 }}>
      <PostLostPet
        onSelect={() => {
          navigation.navigate("LostPetDetails");
        }}
        pic={item.pic}
        name={item.name}
        year={item.year}
        type={item.type}
        sex={item.sex}
        tel={item.tel}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.AllBtn}>
        <BtnLostPet
          name="ทั้งหมด"
          image={require("../../assets/AllTypeBtn.png")}
          onPress={() => {
            setIndex(0);
            console.log("Button all");
          }}
        />
        <BtnLostPet
          name="แมว"
          image={require("../../assets/CatTypeBtn.png")}
          onPress={() => {
            setIndex(1);
            console.log("Button cat");
          }}
        />
        <BtnLostPet
          name="สุนัข"
          image={require("../../assets/DogTypeBtn.png")}
          onPress={() => {
            setIndex(2);
            console.log("Button dog");
          }}
        />
      </View>
      <View style={styles.postLost}>
        <FlatList
          data={filteredData[routes[index].key]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  AllBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  postLost: {
    marginTop: 10,
  },
});
