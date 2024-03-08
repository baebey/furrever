import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// UseState
import {useState} from 'react';

// firebase
import firebase from "../firebase/firebaseDB";

// Redux
import { useSelector, useDispatch } from "react-redux"
import { putDocumentName } from "../store/actions/myAction";
import { putUSER_DATA } from "../store/actions/myAction";



// Alert
const createAlert = () =>
Alert.alert('เคยลงทะเบียนไปแล้ว', 'ใช้อีเมลล์ใหม่หรือไปเข้าสู่ระบบแทน', [
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },
  {text: 'OK', onPress: () => console.log('OK Pressed')},
]);



export default function Signup({ navigation }) {

  // Redux
  const dispatch = useDispatch();

  // Validation Form 
  const [showIncorrect, setIncorrect] = useState(false);
  const [showIncorrectConfirm, setIncorrectConfirm] = useState(false);
  const [showMatchUserNameInDB, setMatchUserNameInDB] = useState(false); // ตรวจสอบชื่อผู้ใช้ห้ามซํ้า

  // เก็บข้อมูล user
  const [userName , setUserName] = useState('');
  const [userEmail , setUserEmail] = useState('');
  const [userPassword , setUserPassword] = useState('')
  const [userConfirm, setUserConfirm] = useState('')

  // ตรวจสอบชื่อผู้ใช้ห้ามซํ้า
  const getCollection = (querySnapshot) => {
    querySnapshot.forEach((res) => {
        // console.log(res.id, "res!!!!!!!!!!!!!!!!");  // res.id จะได้ชื่อ Document
        if(res.id == userName){
            setMatchUserNameInDB(true) // ถ้า true แสดงว่า อีเมลซํ้า เคยสมัครไปแล้ว
        }
         
    })
  }
  // Firebase
  const subjCollection = firebase.firestore().collection("Users");
  
  const addUSer = () => {
    subjCollection.onSnapshot(getCollection);

    if(userName=="" || userEmail=="" || userPassword==""){
      setIncorrect(true);
    }
    else if(userPassword != userConfirm){ // ถ้า พาสเวิด กับ ตอน confirm ไม่เหมือนกันก็ลงทะเบียนไม่สำเร็จ
      setIncorrect(false);
      setIncorrectConfirm(true);
    }
    else if(showMatchUserNameInDB == true){
      console.log("เคยลงทะเบียนอีเมลล์นี้ไปแล้ว");
      createAlert();
    }
    else{
      // reset ให้กลับเป็นค่าตั้งต้น
      setIncorrectConfirm(false);
      setMatchUserNameInDB(false) 

      console.log("userEmail : ", userEmail);
      // ลงทะเบียนใน Firebase
      
      
      subjCollection.doc(userEmail).set({
        address: "",
        email: userEmail,
        noti: userEmail,
        password:userPassword,
        pets:[],
        phone:"",
        posts:[],
        profile_url:"",
        username:userName
      }).then(() => {
          // ส่งไปให้Storeส่วนกลาง หรือ Redux
          dispatch( putDocumentName(userEmail))
          // ไปสร้างใน Noti ด้วย
          firebase.firestore().collection("Notification").doc(userEmail).set({
            noti:[]
          })
          navigation.navigate("Tab");
      }).catch(() => {
          alert("ยูเซอร์ไม่ถูก Add");
      })

    }

    

  }









    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }

    const toggleShowConfirmPassword = () => { 
        setShowConfirmPassword(!showConfirmPassword); 
    }
    
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',  justifyContent:'center'}}>
        <Text style={{color: 'black', fontSize: 28, marginTop: 80, }}>สมัคร บัญชีผู้ใช้</Text>
        {/* <Text style={{color: 'black', fontSize: 28, marginTop: 120, marginLeft: -65}}>บัญชีผู้ใช้</Text> */}
      </View>
      

      {/* form */}
      <View style={{marginTop: 60,}}>

        <TextInput value={userName}  onChangeText={setUserName} style={{borderWidth: 1, borderRadius: 50, height: 45, borderColor: '#faaf6b', padding: 12, fontSize: 16, marginBottom: 20, }} placeholder="ชื่อผู้ใช้"/>
        <TextInput value={userEmail}  onChangeText={setUserEmail} style={{borderWidth: 1, borderRadius: 50, height: 45, borderColor: '#faaf6b', padding: 12, fontSize: 16, marginBottom: 20, }} placeholder="อีเมลล์"  keyboardType="email-address"/>
         <View style={styles.password}> 
            <TextInput value={userPassword}  onChangeText={setUserPassword} secureTextEntry={!showPassword}   style={styles.input}  placeholder="รหัสผ่าน"/> 
            <MaterialCommunityIcons name={showPassword ? 'eye' : 'eye-off'} size={22} color="#faaf6b" style={styles.icon} onPress={toggleShowPassword}/> 
        </View> 
        <View style={styles.con_password}> 
            <TextInput value={userConfirm}  onChangeText={setUserConfirm} secureTextEntry={!showConfirmPassword}   style={styles.input}  placeholder="ยืนยันรหัสผ่าน"/> 
            <MaterialCommunityIcons name={showConfirmPassword ? 'eye' : 'eye-off'} size={22} color="#faaf6b" style={styles.icon} onPress={toggleShowConfirmPassword}/> 
        </View> 
        <View>
            {showIncorrect && (
                <Text style={styles.validationText}>*กรอกข้อมูลให้ครบ</Text>
            )}
            {showIncorrectConfirm && (
                <Text style={styles.validationText}>*ข้อมูลรหัสผ่านไม่ตรงกัน</Text>
            )}
            {showMatchUserNameInDB && (
              <Text style={styles.validationText}>*ชื่อผู้ใช้นี้ถูกใช้แล้ว</Text>
            )}
        </View>
        <TouchableOpacity style={styles.addButton} onPress={()=>{addUSer()}}>
          <Text style={{ fontSize: 16 }}>ลงทะเบียน</Text>
        </TouchableOpacity>

      </View>

      {/* ask */}
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10, marginBottom: 200}}>
      <Text style={{ fontSize: 15, marginRight: 5,}}>มีบัญชีอยู่แล้ว?</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("Signin")}}>
       <Text style={{ fontSize: 15, color: '#faaf6b', fontWeight: 'bold'}}>เข้าสู่ระบบ</Text>
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
  password: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 50, 
    paddingHorizontal: 12, 
    borderColor: '#faaf6b',
    borderWidth: 1,
    marginBottom: 20
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
  validationText: {
    marginHorizontal: 10,
    color:'red', 
    borderBottomWidth: 0, 
    fontSize:12, 
  },
});
