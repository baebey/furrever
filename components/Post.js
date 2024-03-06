import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import TopNav from './TopNav';
// import Banner from './Banner';
import { Dimensions } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from 'react-native-vector-icons/FontAwesome';

// import Carousel from 'react-native-snap-carousel';

const Post = () => {
    const screenWidth = Dimensions.get('window').width;
    const handleLikePress = () => {
        // Handle like button press
    };

    const handleCommentPress = () => {
        // Handle comment button press
    };



    const post = [
        {
            id: '1',
            userAvatar: require('../assets/user1.jpg'),
            username: 'Anchisa Cherdsattayanukul',
            image: require('../assets/cat1.jpg'),
            caption: 'แมวน่ารักที่สุดในโลกเลย อิ้อิ้5555555555555 น้องน่ารักมาก นอนหงายท้องแอ้งแม้ง'
        },
        {
            id: '2',
            userAvatar: require('../assets/user1.jpg'),
            username: 'Anchisa Cherdsattayanukul2',
            image: require('../assets/cat2.jpg'),
            caption: 'แมวน่ารักที่สุดในโลกเลย อิ้อิ้2'
        },
        {
            id: '3',
            userAvatar: require('../assets/user1.jpg'),
            username: 'Anchisa Cherdsattayanukul2',
            image: require('../assets/cat1.jpg'),
            caption: 'แมวน่ารักที่สุดในโลกเลย อิ้อิ้3'
        },
    ];


    return (
        // <View style={{marginBottom: 100, backgroundColor:'red'}}>
            <View style={{ backgroundColor: '#D9D9D9', marginBottom: 20 }}>
                <View>
                </View>
                <View>
                    <FlatList
                        data={post}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.container}>
                                    {/* User Info Section */}
                                    <View style={styles.userInfo}>
                                        <Image source={item.userAvatar} style={styles.userAvatar} />
                                        <Text style={styles.username}>{item.username}</Text>
                                    </View>
                                    {/* Post Caption Section */}
                                    <Text style={styles.caption}>{item.caption}</Text>

                                    {/* Post Image Section */}
                                    <Image source={item.image} style={{ height: 300, width: screenWidth }} />
                                    
                                    {/* Amount Like and Comment Section */}
                                    <View style={styles.amountContainer}>
                                        <TouchableOpacity style={{flexDirection: 'row',}}>
                                            <Icon name="heart" size={15}/>
                                            <Text style={styles.buttonText}>20 like</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleCommentPress}>
                                            <Text style={styles.buttonText}>50 ความคิดเห็น</Text>
                                        </TouchableOpacity>

                                    </View>

                                    {/* Like and Comment Buttons Section */}
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity onPress={handleLikePress} style={{flexDirection: 'row',}}>
                                            <Icon name="heart-o" size={18}/>
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