
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar, FlatList} from 'react-native';


// Redux
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";


// Import Component
import Box_Noti from "../components/Box_Noti";

// Import Firebase
import firebase from "../firebase/firebaseDB";


export default function Notification({ navigation }) {
  const [notiData , setNotiData] = useState([]);

  const documentName = useSelector( (state) => state.myReducer.doc_name ); ; // ชื่อ document ของ user คนนี้
  
  const subjCollection = firebase.firestore().collection("Notification").doc(documentName);
  // const subjCollection_findUserName = firebase.firestore().collection("Users");

  const getCollection = (res) => {
    console.log("🌺🌺🌺" , documentName);
    // console.log(res.id); // res.id คือ ชื่อ Document ใน DB
    // console.log(res.data().noti);  // จะได้ข้อมูลของแต่ละ res.id หรือข้อมูลข้างใน Document มา
    setNotiData([...res.data().noti])

  }


  useEffect(() => {
    // ทำงานที่ควรทำหลังจาก component ถูกเรนเดอร์
    const unsubscribe = subjCollection.onSnapshot(getCollection);    
    return () => {
        unsubscribe(); 
    };
    }, []); 
    
    


    const renderItem = ({ item }) => {
      console.log("item 🎍🎍🎍🎍", item); // ตัวอย่างข้อมูล item = {"detail": "แสดงความคิดเห็นในโพสต์ของคุณ", "notiType": "comment", "responder": "64070257@kmitl.ac.th"}
      return (
        <Box_Noti
          item={item}
          onSelect={() => {
            console.log("click list ");
          }}
        />
      );
    };




  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{color: 'black', fontSize: 28, marginBottom: 10}}>การแจ้งเตือน</Text>
      </View>

      {/* <ScrollView style={{marginBottom: 200, backgroundColor:'cyan'}}> */}
          <FlatList
            style={{ marginTop: 10 }}
            data={notiData}
            renderItem={renderItem}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
          />

          {/* noti 1 box */}
          {/* <View style={styles.boxnoti}>
              <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
              <View style={{paddingRight: 55, justifyContent: 'center'}}>
                  <Text style={styles.name}>ผมรักหมามากครับ</Text>
                  <Text style={styles.description}>ถูกใจโพสต์ของคุณ</Text>
              </View>
          </View> */}
          
      {/* </ScrollView> */}

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
    // paddingTop: 35,
    // backgroundColor:'red'
  },
  boxnoti: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fadacb',
    marginBottom: 18,
  },
  imagebox: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginBottom: 2,
    paddingRight: 15
  }

});
