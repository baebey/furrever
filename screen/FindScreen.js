import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const FindSceen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Pressable style={styles.box} onPress={() => navigation.navigate('')}>
                <View style={styles.row}>
                    <Entypo name="megaphone" size={30} color="black" style={{ marginRight: 10 }} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10,}}>แจ้งสัตว์หาย</Text>
                    <Text style={{ marginLeft: 10 }}>กระจายข่าวสัตว์เลี้ยงที่หาย/พบ</Text>
                </View>
                </View>
            </Pressable>

            <Pressable style={styles.box} onPress={() => navigation.navigate('')}>
                <View style={styles.row}>
                    <FontAwesome name="home" size={30} color="black" style={{ marginRight: 10 }} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10,}}>หาบ้านให้น้อง</Text>
                    <Text style={{ marginLeft: 10 }}>ประกาศตามหาบ้านให้กับสัตว์เลี้ยง</Text>
                </View>
                </View>
            </Pressable>

            <Pressable style={styles.box} onPress={() => navigation.navigate('')}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="line-scan" size={30} color="black" style={{ marginRight: 10 }} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10,}}>สแกนสัตว์เลี้ยง</Text>
                    <Text style={{ marginLeft: 10 }}>สแกนจมูกเพื่อค้นหาสัตว์เลี้ยงของคุณ</Text>
                </View>
                </View>
            </Pressable>

            <Pressable style={styles.box} onPress={() => navigation.navigate('')}>
                <View style={styles.row}>
                    <AntDesign name="search1" size={30} color="black" style={{ marginRight: 10 }} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10,}}>ดูสัตว์เลี้ยงที่หายไป</Text>
                    <Text style={{ marginLeft: 10 }}>ดูประกาศสัตว์เลี้ยงที่หายไปทั้งหมด</Text>
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
        backgroundColor: "#F4EEEE",
    },
    box: {
        backgroundColor: "#FFDBAA",
        marginBottom: 25,
        height: 70,
        borderRadius: 20,
        padding: 10,
        //alignItems: 'center',
        //flexDirection: 'row'
    },
    row: {
        flexDirection: 'row',
        // alignItems: 'center',
    }
});

export default FindSceen;
