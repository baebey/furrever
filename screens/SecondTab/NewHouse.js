import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, useWindowDimensions , FlatList  } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';


// Import Components 
import PostNewHouse from "../../components/postNewHouse";






const data = [
  { pic:"https://editors.dexerto.com/wp-content/uploads/2023/11/02/jujutsu-kaisen-sukuna.jpeg",name: 'Mon', year: '4', type:"สุนัข", sex:"เพศผู้" , detail:"หาน้องให้บ้านใหม่", contact:"สถานรับเลี้ยงดอบคำ", tel:"000-11111111" },
  { pic:"https://butwhytho.net/wp-content/uploads/2023/09/Gojo-Jujutsu-Kaisen-But-Why-Tho-2.jpg",name: 'Tom', year: '4', type:"สุนัข", sex:"เพศเมีย" , detail:"หาน้องให้บ้านใหม่", contact:"สถานรับเลี้ยงดอบคำ", tel:"000-11111111" },
  { pic:"https://i.pinimg.com/736x/9b/88/cc/9b88cc051e886bc16f14b5c68b13ac8d.jpg",name: 'Jerrie', year: '4', type:"สุนัข", sex:"เพศผู้" , detail:"หาน้องให้บ้านใหม่", contact:"สถานรับเลี้ยงดอบคำ", tel:"000-11111111" },
  // Add more items as needed
];




const renderItem = ({ item }) => (
  <View style={{ borderBottomColor: 'purple', marginVertical: 10 }}>
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




// ทำ Tab ด้านบน
const FirstRoute = () => (
  <SafeAreaView style={styles.containerSafe}>
    <ScrollView style={styles.scrollView}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  </SafeAreaView>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});







export default function NewHouse() {

  const layout = useWindowDimensions();
  

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'หมา' },
    { key: 'second', title: 'แมว' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

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