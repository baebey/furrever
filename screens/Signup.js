import { useState } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Signup({ navigation }) {

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
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontSize: 28, marginTop: 100}}>สมัคร</Text>
        <Text style={{color: 'black', fontSize: 28, marginTop: 140, marginLeft: -65}}>บัญชีผู้ใช้</Text>
      </View>
      

      {/* form */}
      <View style={{marginTop: 90,}}>
      <TextInput style={{borderWidth: 1, borderRadius: 50, height: 45, borderColor: '#faaf6b', padding: 12, fontSize: 16, marginBottom: 20, }} placeholder="ชื่อผู้ใช้"/>
        <TextInput style={{borderWidth: 1, borderRadius: 50, height: 45, borderColor: '#faaf6b', padding: 12, fontSize: 16, marginBottom: 20, }} placeholder="อีเมลล์"  keyboardType="email-address"/>
         <View style={styles.password}> 
            <TextInput secureTextEntry={!showPassword}   style={styles.input}  placeholder="รหัสผ่าน"/> 
            <MaterialCommunityIcons name={showPassword ? 'eye' : 'eye-off'} size={22} color="#faaf6b" style={styles.icon} onPress={toggleShowPassword}/> 
        </View> 
        <View style={styles.con_password}> 
            <TextInput secureTextEntry={!showConfirmPassword}   style={styles.input}  placeholder="ยืนยันรหัสผ่าน"/> 
            <MaterialCommunityIcons name={showConfirmPassword ? 'eye' : 'eye-off'} size={22} color="#faaf6b" style={styles.icon} onPress={toggleShowConfirmPassword}/> 
        </View> 
        <TouchableOpacity style={styles.addButton} onPress={()=>{navigation.navigate("Signin")}}>
          <Text style={{ fontSize: 16 }}>ลงทะเบียน</Text>
        </TouchableOpacity>
      </View>

      {/* ask */}
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 60, marginBottom: 200}}>
      <Text style={{ fontSize: 15, marginRight: 5,}}>มีบัญชีอยู่แล้ว?</Text>
      <TouchableOpacity>
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
});