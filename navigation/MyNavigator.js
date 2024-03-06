
import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput,} from "react-native";

// import library ที่จำเป็น
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // v.6
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Import Icon
import { AntDesign } from '@expo/vector-icons';




const Stack = createNativeStackNavigator();
const StackAdmin = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();



// import screen
import LostPetDetails from "../screens/LostPetDetails";
import AddMyPets from "../screens/AddMyPets";
import ListMyPet from "../screens/ListMyPet";


// import ของ เบ
import Signin from "../page/Signin.js";
import Signup from "../page/Signup.js";


// เอาไว้เทสเฉยๆ 
import ScreenTest from "../screens/ScreenTest";




const Authen = () => { 
    return(
        <Stack.Navigator initialRouteName='Signin' screenOptions={{
            headerShown:true, 
            headerTintColor: '#f8f3df',
            headerTitleAlign: 'center', headerStyle: {backgroundColor: '#bad36d'}, headerTitleStyle: {color: '#f8f3df'},
        }} >
            <Stack.Group
                screenOptions={({ navigation }) => ({
                presentation: 'modal',
                headerLeft: () => <TouchableOpacity onPress={navigation.goBack}><AntDesign style={{marginLeft: 10, }} name="left" size={24} color="black" /></TouchableOpacity>,
                })}
            >
                <Stack.Screen name='Signin' component={Signin}  />
                <Stack.Screen name='Signup' component={Signup}  />
                <Stack.Screen name='AddMyPets' component={AddMyPets} />
                <Stack.Screen name='ScreenTest' component={ScreenTest} />
                <Stack.Screen name='ListMyPet' component={ListMyPet} />

            </Stack.Group>
            <Stack.Screen name='LostPetDetails' component={LostPetDetails}  options={{headerShown:false}} />
        </Stack.Navigator>
    )
}





const MainNavigator = () => { 
    return(
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Authen" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Authen" component={Authen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
 }




const MyNavigator = () => {
    return (
      MainNavigator()
    )
  }
export default MyNavigator