import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar, FlatList} from 'react-native';

// Import Component
import Box_Noti from "../components/Box_Noti";


export default function Notification({ navigation }) {



  const renderItem = ({ item, index }, props) => {
    // 🧧 item.name = จะได้ชื่อของคนมาถูกใจโพสเรา เช่น  [ ผมรักหมามากครับ , Sakura, Gojo ]

    return (
      <Box_Noti
        item={item.name}
        navigation={navigation}
        onSelect={() => {
          console.log("click list ");
          // props.navigation.navigate("ScreenTest")
        }}
      />

    );
  };


  const ItemData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'ผมรักหมามากครับ',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Sakura',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Gojo',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Cat',
    },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{color: 'black', fontSize: 28, marginBottom: 10}}>การแจ้งเตือน</Text>
      </View>

      {/* <ScrollView style={{marginBottom: 200, backgroundColor:'cyan'}}> */}
          <FlatList 
              style={{marginTop:10}}
              navigation={navigation}
              data={ItemData}
              renderItem={(item) => 
                renderItem(item, { navigation })
              } 
              numColumns={1} 
              keyExtractor={(item, index) => index.toString()}
          />

          {/* noti 1 box */}
          {/* <View style={styles.boxnoti}>
              <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
              <View style={{paddingRight: 55, justifyContent: 'center'}}>
                  <Text style={styles.name}>ผมรักหมามากครับ</Text>
                  <Text style={styles.description}>ถูกใจโพสต์ของคุณ</Text>
              </View>
          </View> */}
          
      {/* </ScrollView> */}

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
    // paddingTop: 35,
    // backgroundColor:'red'
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
