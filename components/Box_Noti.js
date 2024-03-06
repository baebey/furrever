import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'


// Import Icon
import { AntDesign } from '@expo/vector-icons';


// Component
const Box_Noti = (props) => {
    const navigation = props.navigation;
    const name = props.item;


    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                props.onSelect();
            }}
            >

                <View style={styles.boxnoti}>
                <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
                <View style={{paddingRight: 55, justifyContent: 'center'}}>
                    <Text style={styles.name}>{name} </Text>
                    <Text style={styles.description}>ถูกใจโพสต์ของคุณ</Text>
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