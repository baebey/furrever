<h1 align="center"> Furrevert <img src="https://64.media.tumblr.com/bddf272082ed5154a77b4848d0ec5860/c04d6a829dccf60c-20/s500x750/942a58e8fe62d4751c9eb06257f6536e68b47812.gif" width="100px"></h1>
<p align="center" >
<em>
 Community สำหรับกลุ่มคนที่เลี้ยงสัตว์จำพวกหมาและแมว ไว้เป็นเครือข่ายในการแลกเปลี่ยนข้อมูล และสำหรับโพสถามหาสัตว์ที่หายไป ซึ่งการมาของแอปพลิเคชั่นนี้จะช่วยให้ผู้คนที่สนใจหมากับแมวมารวมตัวกัน และเกิดกิจกรรมต่างๆทั้งการช่วยเหลือและการแชร์ประสบการณ์ดีๆต่อกัน
</em>
</p>



## หลังจาก Load Branch (ใช้กรณี Clone code หรือ แตก Branch จาก Branch นี้)
```JS
npm install
npx react-native start --reset-cache
npx expo start
```

## Git Command นำ Branch ไป Dev 
```js
git init
git remote add origin https://github.com/baebey/furrever.git
git checkout -b ชื่อ
git add .
git commit -m "first commit"
git push -u origin ชื่อ
```

---

## คำสั่ง สร้าง Project
```JS
npx create-expo-app FurreverProject
cd FurreverProject
```

## Library ที่ ลงทั้งหมด
```JS
npm install deprecated-react-native-prop-types
npm install react-native-tab-view 
npm install @react-native-community/datetimepicker
npx expo install @react-native-community/datetimepicker
npm install firebase
npm install --save redux react-redux
npm i react-native-gesture-handler
npm install --save react-native-snap-carousel
npm install react-native-paper
npm install @react-navigation/bottom-tabs
npm install react-navigation-header-buttons
npm i @react-native-community/datetimepicker
npm i react-native-dropdown-select-list
npx expo install expo-image-picker
npm install react-native-gesture-handler
npm install react-native-vector-icons
npm i @fortawesome/react-fontawesome
npx expo install react-native-gesture-handler
npm install react-native-gesture-handler@2.15.0
npm i react-native-elements
```

---

## Languages and Tools 
<p align="left"> 
 <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
 <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> 
 <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a>
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </p>


## Figma
https://www.figma.com/file/jSE3fPtlb9pBcdMRjIimGI/devtool?type=design&node-id=0%3A1&mode=design&t=Z6YfTn8XXL0z9DOq-1


## Firebase 
https://console.firebase.google.com/u/0/project/furrever-2929/firestore/data/~2FUsers~2FJudas@gmail.com

## Slide Present
https://www.canva.com/design/DAF_HXarytE/BqnBs5Og3JfwRGQAz3Wy8g/edit?utm_content=DAF_HXarytE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

---

## กรณีอยากอ้างอิง Redux
<!-- Import ก่อน -->
```JS
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
const documentName = useSelector( (state) => state.myReducer.doc_name ); ; // ชื่อ document ของ user คนนี้
```

---

## UseState
```JS
import React, { useEffect, useState } from "react";
const [userEmail , setUserEmail] = useState('');
```

---

## Navigate
```JS
navigation.pop(); ย้อนกลับ
navigation.goBack(2); เหมือน pop แต่ตัวนี้สามารถระบุจำนวนย้อนกลับได้ เช่น ย้อนกลับไป 2 ขั้นตอน แต่ถ้า navigation.goBack(); เป็นแค่ ย้อนกลับไปหน้าก่อนหน้านี้
navigation.popToTop(); ย้อนกลับไปหน้าแรกที่อยู่บน stack.
```

---

## TextInput & UseState
```JS
import React, { useState } from 'react';
import { TextInput } from 'react-native';
const [text, setText] = useState("");
<TextInput
  placeholder="Type here..."
  onChangeText={setText}
  value={text}
  style={{  }}
/>
```

---

## Image
```JS
<Image source={{ uri: "https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg",}} style={{}} />
{
  imageUpload && (<Image source={{ uri: imageUpload,}} style={{}} />)
}
```

---

## กรณีอยากอ้างอิง Firebase
```JS
import React, { useEffect, useState } from 'react';
import firebase from "../firebase/firebaseDB";
const subjCollection = firebase.firestore().collection("Users");
const getCollection = (querySnapshot) => {
    querySnapshot.forEach((res) => 
    {
      console.log(res.id); // res.id คือ ชื่อ Document ใน DB
      console.log(res.data());  // จะได้ข้อมูลของแต่ละ res.id หรือข้อมูลข้างใน Document มา
    });
  }
useEffect(() => {
//  ทำงานที่ควรทำหลังจาก component ถูกเรนเดอร์
const unsubscribe = subjCollection.onSnapshot(getCollection);
return () => {
    unsubscribe();
};
}, []); //  ตำแหน่งนี้กำหนด dependencies เป็น [] ซึ่งหมายถึง useEffect จะทำงานเมื่อ component ถูกเรนเดอร์ครั้งแรกเท่านั้น
```

---

## กรณีเรียกใช้ DB ผ่าน ปุ่มกด
```JS
const findUser = () => {
const unsubscribe = subjCollection.onSnapshot(getCollection);
return () => {
    unsubscribe(); // ในบางกรณี, คุณต้องการทำงานบางอย่าง (เช่น, unsubscribe จาก Firebase, หรือทำความสะอาดข้อมูลที่ไม่ได้ใช้ = Unmounting (การลบ component ออกจาก DOM)
    };
};
```

---

## เพิ่มข้อมูลใหม่ ใน DB ⛩️⛩️⛩️
```JS
const UpdateData = () => {
  subjCollection.doc(point)
  .set({
      winAll:newWinAll,
      price:all_price,
  })
  .then(() => {
      navigation.pop();
  }).catch(() => {
      alert("ยูเซอร์ไม่ถูก Add");
  })
}
```

---

## Update ข้อมูลใน DB ⛩️⛩️⛩️
```JS
subjCollection_User
.update({
  posts: newPost,
})
.then(() => {
  console.log("อัพเดต");
})
.catch((error) => {
  console.error("เกิดไรขึ้น? ", error);
});
```

## Read ทุก Collection
```JS
const subjCollection = firebase.firestore().collection("Users");
const getCollection = (querySnapshot) => {
  querySnapshot.forEach((res) => 
  {
    console.log(res.id); // res.id คือ ชื่อ Document ใน DB
    console.log(res.data());  // จะได้ข้อมูลของแต่ละ res.id หรือข้อมูลข้างใน Document มา
  });
}
subjCollection.onSnapshot(getCollection);
```

---

## Read แค่ Document เดียว
```JS
const subjCollection = firebase.firestore().collection("Users").doc("Judas@gmail.com");
const getCollection = (res) => {
  console.log(res.id); // res.id คือ ชื่อ Document ใน DB
  console.log(res.data());  // จะได้ข้อมูลของแต่ละ res.id หรือข้อมูลข้างใน Document มา
}
subjCollection.onSnapshot(getCollection);
```

---

## Alert
```JS
import { Alert } from 'react-native';
const createAlert = () => {
  Alert.alert(
    'Alert Title',
    'Alert Message',
    [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel', // This makes the button look like a "cancel" button
      },
    ],
    { cancelable: true }
  );
};
```

---

## อ้างอิง
Icon &emsp; https://icons.expo.fyi/Index

Scrollview &emsp; https://reactnative.dev/docs/scrollview

Tab-view &emsp; https://reactnavigation.org/docs/tab-view/

FlatList &emsp; https://reactnative.dev/docs/flatlist


## สไลด์
Mobile
&emsp; https://onlearn.it.kmitl.ac.th/course/view.php?id=1274

Database 
&emsp; https://onlearn.it.kmitl.ac.th/pluginfile.php/52552/mod_resource/content/9/Ch10_DBConnection.pdf

NAVIGATION1 
&emsp; https://onlearn.it.kmitl.ac.th/pluginfile.php/51338/mod_resource/content/3/Mobile_Ch05_Navigation_1.pdf

NAVIGATION2 
&emsp; https://onlearn.it.kmitl.ac.th/pluginfile.php/51383/mod_resource/content/4/Ch06_Navigation_2.pdf

