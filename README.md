## หลังจาก Load Branch
```JS
npm install
npx react-native start --reset-cache
npx expo start
```


## ลงเพิ่ม
```JS
npm install deprecated-react-native-prop-types
npm install react-native-tab-view 
npm install @react-native-community/datetimepicker
npx expo install @react-native-community/datetimepicker
npm install firebase
npm install --save redux react-redux 
```


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

## กรณีอยากอ้างอิง Firebase
```JS
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

