import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


// Redux
import { useSelector, useDispatch } from "react-redux"
import { putDocumentName } from "../store/actions/myAction";
import { putUSER_DATA } from "../store/actions/myAction";



// Firebase
import firebase from "../firebase/firebaseDB";


export default function Signin({ navigation }) {

  // data User
  const [userEmail , setUserEmail] = useState('');
  const [userPassword , setUserPassword] = useState('');

  // Redux
  const dispatch = useDispatch();





  // Alert
  const createTwoButtonAlert = () =>
    Alert.alert('รหัสผ่านผิด', 'กรุณากรอกใหม่', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);


  // FireBase
  const subjCollection = firebase.firestore().collection("Users");

  const getCollection = (querySnapshot) => {
    querySnapshot.forEach((res) => 
    {
      // console.log(res.id, "res!!!!!!!!!!!!!!!!" , res.data());
      // res.data() = {"address": "ที่ไหนก้ได้ที่ไม่ใช่ที่นี่", "email": "owo@gmail.com", "noti": "owoNoti", "password": "1111", "pets": ["pet0001", "pet0002"], "phone": "0929264152", "posts": ["post0001"], "profile_url": "ht           ttps://firebasestorage.googleapis.com/v0/b/furrever-2929.appspot.com/o/Img%2F003.jpg?alt=media&token=2d508d1c-df7e-42bf-87d1-86fb22c2d1fe", "username": "แว่นตา"}  
      console.log("userEmail ", userEmail , " userPassword" , userPassword) ;

      if(res.id == userEmail){ // ถ้าเข้าเงื่อนไขนี้คือ ชื่อผู้ใช้ถูกแล้ว
        if(res.data().password == userPassword){
          console.log("เข้าเงื่อนไขแล้ว จะย้ายไปหน้า Tab");

          //ส่งไปให้Storeส่วนกลาง หรือ Redux
          dispatch(putDocumentName(userEmail)) // เอาชื่อ อีเมล ไปเก็บส่วนกลาง
          dispatch( putUSER_DATA(res.data()) ) 

          navigation.navigate("Tab");  // จะเก็บข้อมูลของ user ไว้เพื่อเอาไปใช้ต่อในตัวแอพ
        }
        else{ //กรณีพาสเวิร์ดผิด
          createTwoButtonAlert()
        }
      } 


    });
  }

  const findUser = () => {
    console.log("test!!!!!!!!!!!!!!!!");
    const unsubscribe = subjCollection.onSnapshot(getCollection);
    return () => {
      unsubscribe(); // ในบางกรณี, คุณต้องการทำงานบางอย่าง (เช่น, unsubscribe จาก Firebase, หรือทำความสะอาดข้อมูลที่ไม่ได้ใช้ = Unmounting (การลบ component ออกจาก DOM)
    };
};




    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
      }
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 28, marginTop: 120}}>ยินดีต้อนรับ!</Text>

      {/* form */}
      <View style={{marginTop: 100,}}>
        <TextInput style={{borderWidth: 1, borderRadius: 50, height: 45, borderColor: '#faaf6b', padding: 12, fontSize: 16, marginBottom: 20, }} 
        placeholder="อีเมลล์"  keyboardType="email-address"
        value={userEmail}
        onChangeText={setUserEmail}/>
         <View style={styles.con_password}> 
            <TextInput secureTextEntry={!showPassword} value={userPassword}  onChangeText={setUserPassword} style={styles.input}  placeholder="รหัสผ่าน"/> 
            <MaterialCommunityIcons name={showPassword ? 'eye' : 'eye-off'} size={22} color="#faaf6b" style={styles.icon} onPress={toggleShowPassword}/> 
        </View> 
        <TouchableOpacity style={styles.addButton} onPress={()=>{
          findUser();
        }}>
          <Text style={{ fontSize: 16 }}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </View>

      {/* ask */}
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 50, marginBottom: 200}}>
      <Text style={{ fontSize: 15, marginRight: 5,}}>ยังไม่ได้เป็นสมาชิก?</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
       <Text style={{ fontSize: 15, color: '#faaf6b', fontWeight: 'bold'}}>สมัครเลย</Text>
      </TouchableOpacity>
    </View>

      
        
      
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fadacb',
    paddingHorizontal: 35,
    paddingTop: 35
  },
  con_password: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 50, 
    paddingHorizontal: 12, 
    borderColor: '#faaf6b',
    borderWidth: 1,
},  
input: { 
    flex: 1, 
    color: '#333', 
    paddingVertical: 12, 
    paddingRight: 10, 
    fontSize: 16, 
}, 
icon: { 
    marginLeft: 10, 
}, 
addButton:{
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 12,
    backgroundColor: '#faaf6b',
    marginTop: 25,
    borderRadius: 50,  
    
  },
});
