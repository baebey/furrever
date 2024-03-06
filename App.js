import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopNav from './components/TopNav';
import Banner from './components/Banner'
import Post from './components/Post'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FeedScreen from './screens/FeedScreen'


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
    top: 30,
    
  },
});

export default App;
