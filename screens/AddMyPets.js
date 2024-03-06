import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput,} from "react-native";
import { RadioButton } from 'react-native-paper'; 
import { Input } from "react-native-elements";




const AddMyPets = ({ route, navigation }) => {

    const [userName , setUserName] = useState(''); // ชื่อ
    const [age , setAge] = useState(0); // อายุ

    
    const [checkTypePet, setCheckTypePet] = useState('');  // สัตว์เลี้ยง = [dog , cat]
    const [checkGenderPet, setCheckGenderPet] = useState(''); // เพศ = [male , female]
    
    console.log(checkTypePet);
    console.log(checkGenderPet);


    const cancle = () => {
        console.log("กดปุ่ม Cancle หรือ ยกเลิก");
    }

    const confirm = () => {
        console.log("กดปุ่ม confirm หรือ ยืนยัน");
        navigation.navigate("ScreenTest");
    }

    const addImageNose = () => {
        console.log("กดปุ่ม เพิ่มรูปจมูก");
    }


return (
    <View style={styles.container}>
        
        
        {/* ส่วนของรูปภาพสัตว์เลี้ยง */}
        <TouchableOpacity style={[styles.avatar]}>
        
          <Image
            source={{
              uri: "https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/raiden_shogun/image.png?strip=all&quality=100",
            }}
            style={styles.avatarImage}
          />
        </TouchableOpacity>

        {/* เข้าช่วง TextInput */}
        <View style={{ padding: 50, height: 540, justifyContent: "space-around" ,backgroundColor:"white" }}>

            <Input placeholder={"ชื่อผู้ใช้"} placeholderTextColor={"gray"} onChangeText={setUserName}/>
            <Input placeholder={"อายุ"} placeholderTextColor={"gray"} onChangeText={setAge} keyboardType={"numeric"} />

            {/* ช่วง Radio Button */}
            <View style={styles.containerRadio}>
                <Text style={{ fontSize: 18, flex : 1 }}>สัตว์เลี้ยง: </Text>
                <View style={styles.radioGroup}> 
                    <View style={styles.radioButton}> 
                        <RadioButton.Android 
                            value="dog"
                            status={checkTypePet === 'dog' ?  'checked' : 'unchecked'} 
                            onPress={() => setCheckTypePet('dog')} 
                            color="#007BFF"
                        /> 
                        <Text style={styles.radioLabel}> สุนัข </Text> 
                    </View> 
                    <View style={styles.radioButton}> 
                        <RadioButton.Android 
                            value="cat"
                            status={checkTypePet === 'cat' ?  'checked' : 'unchecked'} 
                            onPress={() => setCheckTypePet('cat')} 
                            color="#007BFF"
                        /> 
                        <Text style={styles.radioLabel}> แมว </Text> 
                    </View> 
                </View> 
            </View>

            <View style={styles.containerRadio}>
                <Text style={{ fontSize: 18 , flex : 1, }}>เพศ: </Text>
                <View style={styles.radioGroup}> 
                    <View style={styles.radioButton}> 
                        <RadioButton.Android 
                            value="male"
                            status={checkGenderPet === 'male' ?  'checked' : 'unchecked'} 
                            onPress={() => setCheckGenderPet('male')} 
                            color="#007BFF"
                        /> 
                        <Text style={styles.radioLabel}> เพศผู้ </Text> 
                    </View> 
                    <View style={styles.radioButton}> 
                        <RadioButton.Android 
                            value="female"
                            status={checkGenderPet === 'female' ?  'checked' : 'unchecked'} 
                            onPress={() => setCheckGenderPet('female')} 
                            color="#007BFF"
                        /> 
                        <Text style={styles.radioLabel}> เพศเมีย </Text> 
                    </View> 
                </View> 
            </View>



            {/* ปุ่ม เพิ่มรูปจมูก */}
            <View style={{flexDirection:'row', justifyContent:'center', }}>
                <TouchableOpacity
                    style={{backgroundColor:'#bad36d', borderRadius:50, width:"50%", justifyContent:'center' , padding:6, alignItems:'center', marginBottom:15 ,paddingVertical:10}}
                    onPress={()=>{
                        addImageNose()
                    }}
                >
                    <Text style={{fontSize:15,color:'white' }}>+ เพื่มรูปจมูก</Text>
                </TouchableOpacity>
            </View>
        </View>



        {/* ปุ่ม ยืนยัน ยกเลิกด้านล่างสุดของ Screen */}
        <View style={{flexDirection:'row', justifyContent:'center', }}>
            <TouchableOpacity
                style={{...styles.button, backgroundColor: '#F65045'}}
                onPress={()=>{
                    cancle()
                }}
            >
                <Text style={{fontSize:15,color:'white' }}>ยกเลิก</Text>
            </TouchableOpacity>
            <TouchableOpacity
                // style={{borderRadius:10, width:"45%", marginLeft:10, flexDirection:'row', justifyContent:'center', padding:6,alignItems:'center' , marginBottom:15, 
                // backgroundColor:"green",paddingVertical:10}}
                style={{...styles.button, backgroundColor: '#e2cc9b', marginLeft:10}}
                onPress={confirm}
            >
                <Text style={{fontSize:15, color:'white'}}>ยืนยัน</Text>
            </TouchableOpacity>
        </View>


            
    </View>
  );
};

const colors = {
  mint: "#bad36d",
  tan: "#e2cc9b",
  sun: "#faaf6b",
  pinky: "#fadacb",
  ivory: "#f8f3df",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 18,
    },
    containerRadio : {
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red',
    },
    radioGroup: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        // backgroundColor: 'white', 
        padding:6,
        alignItems:'center',
        
        // สำหรับ เงาของ Border (เก็บไว้ก่อน เผื่อใช้)
        // borderRadius: 8, 
        // elevation: 4, 
        // shadowColor: '#000', 
        // shadowOffset: { 
        //     width: 0, 
        //     height: 2, 
        // }, 
        // shadowOpacity: 0.25, 
        // shadowRadius: 3.84, 
    }, 
    radioButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
    }, 
    radioLabel: { 
        marginLeft: 8, 
        fontSize: 16, 
        color: '#333', 
    }, 
    button: {
        width:"35%",
        borderRadius:10, 
        justifyContent:'center',
        marginBottom:15 ,
        paddingVertical:10,
        alignItems:'center',
    },


  avatar: {
    width: 175,
    height: 175,
    borderRadius: 100,
    alignSelf: "center",
    position: 'relative',
  },
  avatarHovered: {
    opacity: 0.6,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },


});

export default AddMyPets;
