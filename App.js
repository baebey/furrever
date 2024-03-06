import { StyleSheet, Text, View } from 'react-native';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Notification from './screens/Notification';

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
