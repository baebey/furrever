import { useState } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Signin({ navigation }) {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
      }
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 28, marginTop: 120}}>ยินดีต้อนรับ!</Text>

      {/* form */}
      <View style={{marginTop: 100,}}>
        <TextInput style={{borderWidth: 1, borderRadius: 50, height: 45, borderColor: '#faaf6b', padding: 12, fontSize: 16, marginBottom: 20, }} placeholder="อีเมลล์"  keyboardType="email-address"/>
         <View style={styles.con_password}> 
            <TextInput secureTextEntry={!showPassword}   style={styles.input}  placeholder="รหัสผ่าน"/> 
            <MaterialCommunityIcons name={showPassword ? 'eye' : 'eye-off'} size={22} color="#faaf6b" style={styles.icon} onPress={toggleShowPassword}/> 
        </View> 
        <TouchableOpacity style={styles.addButton} onPress={()=>{navigation.navigate("Tab")}}>
          <Text style={{ fontSize: 16 }}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </View>

      {/* ask */}
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 155, marginBottom: 200}}>
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
