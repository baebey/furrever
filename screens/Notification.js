import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 28, marginTop: 30, marginBottom: 30}}>การแจ้งเตือน</Text>

    <ScrollView style={{marginBottom: 200}}>
         {/* noti 1 box */}
         <View style={styles.boxnoti}>
            <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
            <View style={{paddingRight: 55, justifyContent: 'center'}}>
                <Text style={styles.name}>ผมรักหมามากครับ</Text>
                <Text style={styles.description}>ถูกใจโพสต์ของคุณ</Text>
            </View>
        </View>
        {/* noti 1 box */}
        <View style={styles.boxnoti}>
            <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
            <View style={{paddingRight: 55, justifyContent: 'center'}}>
                <Text style={styles.name}>ผมรักหมามากครับ</Text>
                <Text style={styles.description}>ได้แสดงความคิดเห็นโพสต์ของคุณ</Text>
            </View>
        </View>

        {/* noti 1 box */}
        <View style={styles.boxnoti}>
            <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
            <View style={{paddingRight: 55, justifyContent: 'center'}}>
                <Text style={styles.name}>ผมรักหมามากครับ</Text>
                <Text style={styles.description}>ได้แสดงความคิดเห็นโพสต์ใน "Fine New Pet" ของคุณ</Text>
            </View>
        </View>

        {/* noti 1 box */}
        <View style={styles.boxnoti}>
            <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
            <View style={{paddingRight: 55, justifyContent: 'center'}}>
                <Text style={styles.name}>ผมรักหมามากครับ</Text>
                <Text style={styles.description}>ได้แสดงความคิดเห็นโพสต์ใน "Report Pet" ของคุณ</Text>
            </View>
        </View>

         {/* noti 1 box */}
         <View style={styles.boxnoti}>
            <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
            <View style={{paddingRight: 55, justifyContent: 'center'}}>
                <Text style={styles.name}>ผมรักหมามากครับ</Text>
                <Text style={styles.description}>ถูกใจโพสต์ของคุณ</Text>
            </View>
        </View>
        {/* noti 1 box */}
        <View style={styles.boxnoti}>
            <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
            <View style={{paddingRight: 55, justifyContent: 'center'}}>
                <Text style={styles.name}>ผมรักหมามากครับ</Text>
                <Text style={styles.description}>ได้แสดงความคิดเห็นโพสต์ของคุณ</Text>
            </View>
        </View>

        {/* noti 1 box */}
        <View style={styles.boxnoti}>
            <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
            <View style={{paddingRight: 55, justifyContent: 'center'}}>
                <Text style={styles.name}>ผมรักหมามากครับ</Text>
                <Text style={styles.description}>ได้แสดงความคิดเห็นโพสต์ใน "Fine New Pet" ของคุณ</Text>
            </View>
        </View>

        {/* noti 1 box */}
        <View style={styles.boxnoti}>
            <Image style={styles.imagebox} source={{ uri: 'https://media.discordapp.net/attachments/1183169894330671256/1214545725686546452/image.png?ex=65f980da&is=65e70bda&hm=90c911acb83f216ef92c398c884e007cccd7a11bd4db7bb15e46edc6d64f103a&=&format=webp&quality=lossless'}}/>
            <View style={{paddingRight: 55, justifyContent: 'center'}}>
                <Text style={styles.name}>ผมรักหมามากครับ</Text>
                <Text style={styles.description}>ได้แสดงความคิดเห็นโพสต์ใน "Fine New Pet" ของคุณ</Text>
            </View>
        </View>
    </ScrollView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    paddingTop: 35,
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