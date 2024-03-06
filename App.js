import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Kodchasan_400Regular } from '@expo-google-fonts/kodchasan';

import FindScreen from './screen/FindScreen';
import ScanScreen from './screen/ScanScreen';

export default function App() {
  return <FindScreen/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Kodchasan_400Regular'
  },
});
