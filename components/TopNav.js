import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Banner from './Banner';

const TopNav = () => {
  return (
    <View style={{ backgroundColor:'white', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingBottom: 5 }}>
      <Text style={{fontSize: 25}}>Furrever</Text>
      <TouchableOpacity >
        <Icon name="plus-circle" size={25}/>      
      </TouchableOpacity>
    </View>
  );
};

export default TopNav;