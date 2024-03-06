import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'


// Import Icon
import { AntDesign } from '@expo/vector-icons';


// Component
const Box_MyPet = (props) => {
    const navigation = props.navigation;


    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                props.onSelect();
            }}
            >

            <View style={styles.list}>



                {/* ส่วนของรูปภาพ */}
                <View style={{}}>
                    <Image
                        source={{
                        uri: "https://media.discordapp.net/attachments/1014418970679451648/1214853008156917820/BF57178A-9A56-43A7-AF57-E2791A6AE05F.jpg?ex=65fa9f08&is=65e82a08&hm=ba0229a0640abf5a897d1301787bf1573d8dcbbf404efa3d992dc87f67807721&=&format=webp&width=1192&height=670",
                        }}
                        style={{width:60, height:60 , borderRadius:50, }}
                    />
                </View>
                


                <View style={{marginLeft:20 , marginVertical:10}}>
                    <Text style={{fontSize: 20}}>แสวม่อน</Text>
                    <Text style={styles.fontGreySizeSmall}>2 ปี, แมวเพศเมีย</Text>
                    <Text style={styles.fontGreySizeSmall}>เพศผู้</Text>
                </View>

                        

                <View style={{ position:'absolute', right:10, zIndex:10000 ,}}>
                    <AntDesign name="right" size={24} color="grey" />
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
    list: {
        backgroundColor:'#f8f3df', // อยากรู้คือไร เปิดสี ตรงนี้ !!
        flexDirection:"row",
        alignItems: 'center',
        borderRadius: 20,
        padding: 5,
        borderColor: '#e2cc9b',
        borderWidth: 3,
    },
    fontGreySizeSmall: {
        fontSize:11,
        color:'grey',

    }


});


export default Box_MyPet