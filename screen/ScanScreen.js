import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const ScanScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>

                    <Text style={{ fontWeight: 'bold', fontSize: 20}}>ผลการค้นหา...</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20}}>สัตว์ที่ใก้เคียงกับรูปที่ท่านแสกน</Text>

                    <View style={styles.box} >
                        <View style={styles.pic} >
                        <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}
                            onPress={() => navigation.navigate("")}>
                            <View>
                                <Image source={{ uri: "https://cdn.discordapp.com/attachments/1055019951758516294/1214877591039905802/Z.png?ex=65fab5ed&is=65e840ed&hm=1f853f5fae95690e83142845710d4692756e31abe00666ef13a01c5f50ef1f9c" }} />
                            </View>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.txt}> น้องเนย </Text>
                        <Text style={styles.txt}> บริเวณกรุงเทพ </Text>
                    </View>

                    <View style={styles.box} >
                        <View style={styles.pic} >
                        <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}
                            onPress={() => navigation.navigate("")}>
                            <View>
                                <Image source={{ uri: "https://cdn.discordapp.com/attachments/1055019951758516294/1214877616859906068/2Q.png?ex=65fab5f3&is=65e840f3&hm=38af9637feb6c8765ceab358a093eae0dec19ef64b215aec9e008fc0025ed516&" }} />
                            </View>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.txt}> น้องชีส </Text>
                        <Text style={styles.txt}> บริเวณนนทบุรี </Text>
                    </View>

                    <View style={styles.box} >
                        <View style={styles.pic} >
                        <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}
                            onPress={() => navigation.navigate("")}>
                            <View>
                                <Image source={{ uri: "https://cdn.discordapp.com/attachments/1055019951758516294/1214877675227979836/images.png?ex=65fab601&is=65e84101&hm=52c4e1f3bf44554add6223acd790b15cfdd04aa213ac74dff96cb5e30af2c96d&" }} />
                            </View>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.txt}> น้องแซลม่อน </Text>
                        <Text style={styles.txt}> บริเวณกรุงเทพ </Text>
                    </View>

                    <View style={styles.box} >
                        <View style={styles.pic} >
                        <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}
                            onPress={() => navigation.navigate("")}>
                            <View>
                                <Image source={{ uri: "https://cdn.discordapp.com/attachments/1055019951758516294/1214877696400687104/images.png?ex=65fab606&is=65e84106&hm=18142b6fe08280bf91409d66fff5c88bad441ec889664678ebd7de9c6f4788b4&" }} />
                            </View>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.txt}> น้องโบ้ </Text>
                        <Text style={styles.txt}> บริเวณกรุงเทพ </Text>
                    </View>

                    <View style={styles.box} >
                        <View style={styles.pic} >
                        <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}
                            onPress={() => navigation.navigate("")}>
                            <View>
                                <Image source={{ uri: "https://cdn.discordapp.com/attachments/1055019951758516294/1214877722493325343/images.png?ex=65fab60c&is=65e8410c&hm=4dbd87249f36d46b9cf0499ca0f74457cca3a4129262a181c492e13604d592f8&" }} />
                            </View>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.txt}> น้องจุบเม่ง </Text>
                        <Text style={styles.txt}> บริเวณสมุทรปราการ </Text>
                    </View>

                    <View style={styles.box} >
                        <View style={styles.pic} >
                        <TouchableOpacity style={{ marginLeft: 10, marginRight: 10 }}
                            onPress={() => navigation.navigate("")}>
                            <View style={{ justifyContent: "center", alignItems: "center", }}>
                                <Image source={{ uri: "https://cdn.discordapp.com/attachments/1055019951758516294/1214877752704892948/9k.png?ex=65fab613&is=65e84113&hm=43ba729c861fa548ba81648a02754ad347b08c99b64a11dc9e5b3db75c026d7e&" }} />
                            </View>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.txt}> น้องสายไหม </Text>
                        <Text style={styles.txt}> บรีเวณชลบุรี </Text>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4EEEE",
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoll: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
    ,
    box: {
        //height: 250,
        width: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4EEEE',
        margin: 10,
    },
    pic: {
        height: 150,
        width: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom:5,
        
    },
    txt:{
        fontSize: 16,
    }
});

export default ScanScreen;
