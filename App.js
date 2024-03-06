import { StyleSheet, Text, View } from 'react-native';
import Signin from './page/Signin';
import Signup from './page/Signup';
import Notification from './page/Notification';

export default function App() {
  return (
    <View>
      {/* <Signin /> */}
      {/* <Signup /> */}
      <Notification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 35
  },
});
