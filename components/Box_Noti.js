import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'





// Import Icon
import { AntDesign } from '@expo/vector-icons';

// Firebase
import firebase from "../firebase/firebaseDB";

// Component
const Box_Noti = (props) => {


    const item = props.item; // item ={"detail": "ถูกใจโพสของคุณ", "notiType": "like", "responder": "64070257@kmitl.ac.th"}

    // State
    const [responder , setResponder] = useState("");
    const [url , setUrl] = useState("");


    const subjCollection = firebase.firestore().collection("Users");
    const getCollection = (querySnapshot) => {
        querySnapshot.forEach((res) => 
        {
            if(res.id == item.responder){
                // res.data() = {"address": "บ้าน", "email": "64070257@kmitl.ac.th", "password": "1111", "pet": [""], "phone": "0876161934", "post": [""], "profile_url": "https://staticg.sportskeeda.com/editor/2023/06/ca77b-16863370440945-1920.jpg?w=840", "ussername": "gojo"}
                setResponder(res.data().username)
                setUrl(res.data().profile_url)
            }
        });
    }
    useEffect(() => {
    // ทำงานที่ควรทำหลังจาก component ถูกเรนเดอร์
    const unsubscribe = subjCollection.onSnapshot(getCollection);
    return () => {
        unsubscribe(); 
    };
    }, []);
        


    
    


    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                props.onSelect();
            }}
            >

                <View style={styles.boxnoti}>
                <Image style={styles.imagebox} source={{ uri: url}}/>
                <View style={{paddingRight: 55, justifyContent: 'center'}}>
                    <Text style={styles.name}>{responder} {item.notiType}</Text>
                    <Text style={styles.description}>{item.detail}</Text>
                </View>
                </View>


        </TouchableOpacity>

    )
}

const colors = {
    mint: "#bad36d",
    tan: "#e2cc9b",
    sun: "#faaf6b",
    pinky: "#fadacb",
    ivory: "#f8f3df",
  };

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom:"7%",
        // width:"100%",
        height:"auto",
    },
    fontGreySizeSmall: {
        fontSize:11,
        color:'grey',

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








export default Box_Noti