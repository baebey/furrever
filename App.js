import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Notification from './screens/Notification';
=======
import TopNav from './components/TopNav';
import Banner from './components/Banner'
import Post from './components/Post'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FeedScreen from './screens/FeedScreen'
>>>>>>> main


const App = () => {
  return (
    // ต้องใช้เพราะมันจะ error ตอนรันบังคับใช้ทำไมไม่รู้อิ gesture
    <GestureHandlerRootView style={styles.container}>
      <FeedScreen/>
      {/* <Banner/> */}
    </GestureHandlerRootView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    marginHorizontal: 30,
    marginTop: 35
=======
    top: 30,
    
>>>>>>> main
  },
});

export default App;
