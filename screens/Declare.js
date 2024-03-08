import React from "react";
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Declare = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Pressable style={styles.box} onPress={() => navigation.navigate('')}>
                <View style={styles.row}>
                    <Entypo name="megaphone" size={30} color="black" style={{ marginRight: 10 }} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>แจ้งสัตว์หาย</Text>
                    <Text style={{ }}>กระจายข่าวสัตว์เลี้ยงที่หาย/พบ</Text>
                </View>
                </View>
            </Pressable>
            
            {/* <TouchableOpacity style={{...styles.box, flexDirection: 'row', justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('')}>
                <View style={{  }}>
                    <Entypo name="megaphone" size={30} color="black" style={{ marginRight: 10 }} />
                </View>
                <View style={{}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>แจ้งสัตว์หาย</Text>
                    <Text style={{  }}>กระจายข่าวสัตว์เลี้ยงที่หาย/พบsssssss</Text>
                </View>
            </TouchableOpacity> */}

            <Pressable style={styles.box} onPress={() => navigation.navigate('NewHouse')}>
                <View style={styles.row}>
                    <FontAwesome name="home" size={30} color="black" style={{ marginRight: 10 }} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>หาบ้านให้น้อง</Text>
                    <Text style={{ }}>ประกาศตามหาบ้านให้กับสัตว์เลี้ยง</Text>
                </View>
                </View>
            </Pressable>

            <Pressable style={styles.box} onPress={() => navigation.navigate('ScanScreen', {navigation : navigation})}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="line-scan" size={30} color="black" style={{ marginRight: 10 }} />
                <View style={{ flexDirection:'column' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>สแกนสัตว์เลี้ยง</Text>
                    <Text style={{  }}>สแกนจมูกเพื่อค้นหาสัตว์เลี้ยงของคุณ</Text>
                </View>
                </View>
            </Pressable>

            <Pressable style={styles.box} onPress={() => navigation.navigate('LostPetDetails')}>
                <View style={styles.row}>
                    <AntDesign name="search1" size={30} color="black" style={{ marginRight: 10 }} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, }}>ดูสัตว์เลี้ยงที่หายไป</Text>
                    <Text style={{  }}>ดูประกาศสัตว์เลี้ยงที่หายไปทั้งหมด</Text>
                </View>
                </View>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        paddingHorizontal: 20,
        backgroundColor: "#F4EEEE",
        justifyContent:'space-around',
    },
    box: {
        backgroundColor: "#FFDBAA",
        marginBottom: 25,
        // height: 70,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical:20, // แนวตั้ง
        //alignItems: 'center',
        //flexDirection: 'row'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default Declare;