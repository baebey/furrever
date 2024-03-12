import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity, 
  Text,
  Image,
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
  console.log("index",index);
  // lsit สัตว์
  const [listDog, setListDog] = useState([]);
  const [listCat, setListCat] = useState([]);
  // cat 1 ex  cat 🧠🧠🧠 [{"age": 5, "gender": "เพศผู้", "location": "ท่าเรือออสมอส", "lostDate": "12/10/2468", "lostTime": "10:00", "nose_url": "httd618", "pet_name": "หมอโง่", "pet_url": "https://fires1f7b1b", "status":  "ยังไม่พบ", "type": "แมว"}
  const [listAll, setListAll] = useState([]);

  // const [routes] = useState([
  //   { key: "all", title: "ทั้งหมด" },
  //   { key: "cat", title: "แมว" },
  //   { key: "dog", title: "สุนัข" },
  // ]);

  //firebase
  const subjCollection = firebase.firestore().collection("Pets");

  const getCollection = (querySnapshot) => {
    const dogData = [];
    const catData = [];
    const allData = [];

    querySnapshot.forEach((res) => {
      // const {
      //   pet_url,
      //   pet_name = "Default Name",
      //   age = "Default Age",
      //   type = "Default Type",
      //   gender = "Default Gender",
      //   nose_url,
      // } = res.data();

      // const animal = {
      //   pic: pet_url,
      //   name: pet_name,
      //   year: age,
      //   type,
      //   sex: gender,
      //   location: "",
      //   tel: "",
      //   id: res.id,
      //   nose_url,
      // };
      
      allData.push(res.data());
      if (res.data().type  === "หมา") {
        dogData.push(res.data());
      } else if (res.data().type === "แมว") {
        catData.push(res.data());
        // console.log("cat 🧠🧠🧠", catData);
      }
    });

    // ใส่ค่าลง UseState
    setListDog([...dogData]);
    setListCat([...catData]);
    setListAll([...allData]);



    // setFilteredData({
    //   dog: dogData,
    //   cat: catData,
    //   all: allData,
    // });
    
  };
  

  useEffect(() => {
    const unsubscribe = subjCollection.onSnapshot(getCollection);
    return () => {
      unsubscribe();
    };
  }, []);

  const renderItem = ({ item } ) => (
    <View style={{ borderBottomColor: "purple", marginVertical: 10 }}>
      <PostLostPet
        onSelect={() => {
          navigation.navigate("LostPetDetails");
        }}
// {"item": undefined, "name": undefined, "onSelect": [Function onSelect], "pic": "httpedia&token=b052f05e-23c1-4a22-9806-9084e31f7b1b", "sex": undefined, "tel": undefined, "type": "แมว", "year": undefined}
        
        pic={item.pet_url}
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
        {/* <BtnLostPet
          name="ทั้งหมด"
          image={require("../../assets/AllTypeBtn.png")}
          onPress={() => {
            setIndex(2);
            console.log("Button all");
          }}
        /> */}


      <TouchableOpacity style={{}} onPress={()=>{
          setIndex(2);
          console.log("Button cat", index);
        }}>
          <Image source={require("../../assets/AllTypeBtn.png")} style={{}} />
          <Text style={{ alignItems: "center", textAlign:"center" }}>ทั้งหมด</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{}} onPress={()=>{
          setIndex(1);
          console.log("Button cat", index);
        }}>
          <Image source={require("../../assets/CatTypeBtn.png")} style={{}} />
          <Text style={{ alignItems: "center", textAlign:"center" }}>แมว</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{}} onPress={()=>{
          setIndex(0);
          console.log("Button cat", index);
        }}>
          <Image source={require("../../assets/DogTypeBtn.png")} style={{}} />
          <Text style={{ alignItems: "center", textAlign:"center" }}>หมา</Text>
        </TouchableOpacity>




        {/* <BtnLostPet
          name="สุนัข"
          image={require("../../assets/DogTypeBtn.png")}
          onPress={() => {
            setIndex(0);
            console.log("Button dog");
          }}
        /> */}
      </View>
      <View style={styles.postLost}>

        {/* ถ้าเป็น หมา , เงื่อนไขคือ index = 0 */}
        {index === 0 && (
           <FlatList
           data={listDog}
           renderItem={renderItem}
           keyExtractor={(item) => item.id}
         />
         )}
        {/* โชว์ แมว */}
        {index === 1 && (
           <FlatList
           data={listCat}
 
           renderItem={renderItem}
           keyExtractor={(item) => item.id}
         />
        )}
        {/* โชว์สัตว์เลี้ยงทั้งหมด */}
        {index === 2 && (
           <FlatList
           data={listAll}
           renderItem={renderItem}
           keyExtractor={(item) => item.id}
         />
        )}

        {/* <FlatList
          data={filteredData[routes[index].key]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> */}
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
    justifyContent: "space-around",
  },
  postLost: {
    marginTop: 10,
  },
});