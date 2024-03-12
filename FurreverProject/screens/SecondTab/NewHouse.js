import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useWindowDimensions , FlatList  } from "react-native";
import { TabView,TabBar , SceneMap } from 'react-native-tab-view';


// Import Components 
import PostNewHouse from "../../components/postNewHouse";

// Firebase
import firebase from "../../firebase/firebaseDB";




const data = [
  { pic:"https://cdn.mos.cms.futurecdn.net/XjZw5ff68i24oYseKq2CWd-1200-80.jpg",name: 'Mon', year: '4', type:"สุนัข", sex:"เพศผู้" , detail:"กินเก่งเกินไปค่ะ วันๆจะกินแต่ดังโงะ เจ้าของจนไปแล้วค่ะ", contact:"งงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง", tel:"000-11111111" },
  { pic:"https://butwhytho.net/wp-content/uploads/2023/09/Gojo-Jujutsu-Kaisen-But-Why-Tho-2.jpg",name: 'Tom', year: '4', type:"สุนัข", sex:"เพศเมีย" , detail:"หาบ้านใหม่ให้น้องค่ะ พอดีทางเราไม่สะดวกรับเลี้ยง เลยอยากขอคนใจบุญรับเลี้ยงเจ้าหมาตัวนี้หน่อยค่ะ", contact:"คืออะไร", tel:"000-11111111" },
  { pic:"https://i.pinimg.com/736x/9b/88/cc/9b88cc051e886bc16f14b5c68b13ac8d.jpg",name: 'Jerrie', year: '4', type:"สุนัข", sex:"เพศผู้" , detail:"งื้อ", contact:"สถานรับเลี้ยงดอบคำ", tel:"000-11111111" },
  { pic:"https://i.pinimg.com/736x/9b/88/cc/9b88cc051e886bc16f14b5c68b13ac8d.jpg",name: 'Jerrie', year: '4', type:"สุนัข", sex:"เพศผู้" , detail:"งื้อ", contact:"สถานรับเลี้ยงดอบคำ", tel:"000-11111111" },
  // Add more items as needed
];




const renderItem = ({ item }) => (
  <View style={{ borderBottomColor: 'purple', marginVertical: 10 }}>
    <PostNewHouse
      pic={item.ani_url}
      name={item.ani_name}
      year={item.age}
      type={item.type}
      sex={item.gender}
      detail={item.txt}
      contact={item.caretaker}
      tel={item.tel}
    />
  </View>
);




// ทำ Tab ด้านบน
const FirstRoute = (props) => (
  <SafeAreaView style={styles.containerSafe}>
    <ScrollView style={styles.scrollView}>
      <FlatList
      style={{paddingHorizontal:15}}
        data={props.item}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  </SafeAreaView>
);

const SecondRoute = (props) => (
  <FlatList
  style={{paddingHorizontal:15}}
    data={props.item}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});







export default function NewHouse() {

  const layout = useWindowDimensions();


  const [listDog , setListDog] = useState([]);
  const [listCat , setListCat] = useState([]);

  const subjCollection = firebase.firestore().collection("Adoption");
  const getCollection = (querySnapshot) => {
      var copy_Dog_DB = []
      var copy_Cat_DB = []

      querySnapshot.forEach((res) => 
      {
        if(res.data().type == "หมา"){
          copy_Dog_DB.push(res.data());
        }
        else{
          copy_Cat_DB.push(res.data());
        }
      });
      setListDog([...copy_Dog_DB]);
      setListCat([...copy_Cat_DB]);
    }
    useEffect(() => {
    //  ทำงานที่ควรทำหลังจาก component ถูกเรนเดอร์
    const unsubscribe = subjCollection.onSnapshot(getCollection);
    return () => {
        unsubscribe();
    };
    }, []);


  

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'หมา' },
    { key: 'second', title: 'แมว' },
  ]);



  const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'black'}
        inactiveColor={'white'}
        indicatorContainerStyle={{backgroundColor:"#bad36d"}}
        indicatorStyle={{backgroundColor:'#faaf6b', height:"10%"}}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      // renderScene={renderScene}
      renderScene={
        // SceneMap = ฟังก์ชันที่ใช้สร้าง map ของ component ที่ควรแสดงในแต่ละ tab ของ TabView.
        SceneMap({
          first: () => <FirstRoute   navigation={navigation} item={listDog} />,
          second: () => <SecondRoute navigation={navigation} item={listCat} /> ,
        })
      }
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
  containerSafe : {
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