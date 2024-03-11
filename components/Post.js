import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import TopNav from './TopNav';
// import Banner from './Banner';
import { Dimensions } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// Import Icon
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


// Redux
import { useSelector, useDispatch } from "react-redux";

// Import Firebase
import firebase from "../firebase/firebaseDB";



const Post = () => {
    const screenWidth = Dimensions.get('window').width;

    
    

    const handleLikePress = (idPost, likes) => {
        //! Handle like button press
        
        console.log("🧉🧉 ", idPost , likes);
        const subjCollection_Forlike = firebase.firestore().collection("Post").doc(idPost);
        let addlikes = likes + 1;
        subjCollection_Forlike
        .update({
            likes: addlikes,
        })
        .then(() => {
            console.log("อัพเดต");
            return "yes";
        })
        .catch((error) => {
            console.error("เกิดไรขึ้น? ", error);
        });
        return "yes";

    };

    const handleCommentPress = () => {
        // Handle comment button press
         
    };


    // Redux
    const documentName = useSelector( (state) => state.myReducer.doc_name ); ; // ชื่อ document ของ user คนนี้

    // UseState
    const [allPost , setAllPost] = useState([]);
    const [eachPost , setEachPost] = useState({});

    
    
    const subjCollection = firebase.firestore().collection("Post");
    const getCollection = async (querySnapshot) => {

        var cat = []

        querySnapshot.forEach((res1) => 
// res.data ของ Post = {"comments": [], "countComment": 0, "img": "https://firebasestorage.googleapis.com/9429ee0", "likes": 0, "poster": "64070257@kmitl.ac.th", "txt": "Hello"}
        {
            setEachPost({...res1.data()});

            // ⁡⁢⁢⁢​‌‌‍หา UserName ​⁡
            const userCollection = firebase.firestore().collection("Users").doc(res1.data().poster);
            const getCollection_User = (res2) => {
                let user_username = res2.data().username
                
                // copy ข้อมูลมาแล้วค่อยเพิ่ม UserName กับ Profile_url
                var coyPyeachPost = {...res1.data()}
                coyPyeachPost.username = user_username; // เอา Username ใส่ลงไป
                coyPyeachPost.profile_url = res2.data().profile_url; // เอา Username ใส่ลงไป
                coyPyeachPost.idPost = res1.id;
//🏖🏖 coyPyeachPost = {"comments": [], "countComment": 0, "idPost": "64070257@kmitl.ac.th_2024-03-11T104525395Z", "img": "https://fireb4774", "likes": 0, "  poster": "64070257@kmitl.ac.th", "profile_url": "https://staticg.sport", "txt": "สวัสดีค่ะ ชอบเจ้าต้าวตัวนี้มาก ", "username": "gojo"}

                cat.push({...coyPyeachPost})
            }
            userCollection.onSnapshot(getCollection_User);            
// res.data ของ User ที่ได้จาก poster = {"address": "บ้าน", "email": "64070257@kmitl.ac.th", "password": "1111", "pet": [""], "phone": "0876161934", "post": [], "posts": ["64070257@kmitl.ac.th_2024-03-11T104525395Z"], "profile_url": "https://s0", "username": "gojo"}

        });

        // ​‌‌‍⁡⁢⁢⁢ใส่ค่าลงใน ALL_POST ⁡⁢⁢⁢หลังจากวนลูปหา Post ​⁡
        setAllPost(cat);
    }


    
    useEffect(() => {
    //  ทำงานที่ควรทำหลังจาก component ถูกเรนเดอร์
    const unsubscribe = subjCollection.onSnapshot(getCollection);
    
    return () => {
        unsubscribe();
    };
    }, []);

    

    return (
        // <View style={{marginBottom: 100, backgroundColor:'red'}}>
            <View style={{ backgroundColor: 'white', marginBottom: 20 }}>
                <View style={styles.container}>
                    <FlatList
                        data={allPost}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ width:"100%"}} >
                                    {/* User Info Section */}
                                    <View style={styles.userInfo}>
                                        {/* รูป Profile คน Post */}
                                        <Image  source={{uri: item.profile_url }} style={styles.userAvatar} />
                                        <Text style={styles.username}>{item.username}</Text>
                                    </View>
                                    {/* Post Caption Section */}
                                    <Text style={styles.caption}>{item.txt}</Text>

                                    {/* Post Image Section */}
                                    {/* <Image source={item.image} style={{ height: 300, width: screenWidth }} /> */}
                                    <View style={{padding:10}}>
                                        <Image source={{ uri: item.img}} style={{ height: 300, width: "100%" }} />

                                    </View>

                                    
                                    {/* Amount Like and Comment Section */}
                                    <View style={styles.amountContainer}>
                                        <TouchableOpacity style={{flexDirection: 'row',}}>
                                            {/* <Icon name="heart" size={15}/> */}
                                            <AntDesign name="heart" size={15} color="red" />
                                            <Text style={styles.buttonText}>{ item.likes } like</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleCommentPress}>
                                            <Text style={styles.buttonText}>{ item.countComment } ความคิดเห็น</Text>
                                        </TouchableOpacity>

                                    </View>

                                    {/* Like and Comment Buttons Section */}
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity  onPress={() => {
                                                handleLikePress(item.idPost, item.likes);
                                            }} style={{flexDirection: 'row',}}>

                                            <Icon name="heart-o" size={18} />
                                            <Text style={styles.buttonText}>ถูกใจ</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleCommentPress} style={{flexDirection: 'row',}}>
                                            <Icon name="comment-o" size={18}  />
                                            <Text style={styles.buttonText}>แสดงความคิดเห็น</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }}

                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        // </View>
    );


};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#000',
        shadowColor: '#000',
        marginVertical: 5,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    userAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
    },
    caption: {
        paddingHorizontal: 10,
        paddingBottom: 15,
    },
    buttonContainer: {
        borderTopWidth: 1,
        borderTopColor: '#D9D9D9',
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        textAlign: 'center',
        paddingHorizontal: 60,
        
    },
    buttonText: {
        color: 'blue',
       
        textAlign: 'center',
        color: 'black',
        paddingHorizontal: 10,

    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        textAlign: 'center'
    },
    icon: {
        backgroundColor: 'transparent', // Set background color to transparent for the icon
      },
});

export default Post;