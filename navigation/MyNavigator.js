
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




// import ของ เฟรม
import LostPetDetails from "../screens/LostPetDetails";
import AddMyPets from "../screens/AddMyPets";
import ListMyPet from "../screens/ListMyPet";


// import ของ เบ
import Signin from "../page/Signin.js";
import Signup from "../page/Signup.js";
import Notification from "../page/Notification.js";


// import ของ เอิน
import HomePage from "../screens/HomePage.js"


// ของอุ้ม
import Profile from "../screens/Profile";
import ProfileEdit from "../screens/ProfileEdit";


// ของนน
import Declare from '../screens/Declare.js';
import ScanScreen from '../screens/ScanScreen';



// เอาไว้เทสเฉยๆ 
import ScreenTest from "../screens/ScreenTest";


const colors = {
    mint: "#bad36d",
    tan: "#e2cc9b",
    sun: "#faaf6b",
    pinky: "#fadacb",
    ivory: "#f8f3df",
};


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
                {/* ของเบ */}
                <Stack.Screen name='Signin' component={Signin}  />
                <Stack.Screen name='Signup' component={Signup}  />
                <Stack.Screen name='Notification' component={Notification} />

                {/* ของเฟรม */}
                <Stack.Screen name='AddMyPets' component={AddMyPets} />
                <Stack.Screen name='ScreenTest' component={ScreenTest} />
                <Stack.Screen name='ListMyPet' component={ListMyPet} />
                <Stack.Screen name='LostPetDetails' component={LostPetDetails}  options={{headerShown:false}}  />

                {/* ของเอิน */}
                <Stack.Screen name='HomePage' component={HomePage} />

                {/* ของอุ้ม */}
                <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile", headerShown: false,}} />
                
                {/* ของนน */}
                <Stack.Screen name='FindScreen' component={FindScreen} />
                <Stack.Screen name='ScanScreen' component={ScanScreen} />



            </Stack.Group>
        </Stack.Navigator>
    )
}

const ProfileTab = () => {
    return(
        <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}>
            <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile", headerShown: false, }} />

            <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{ headerTitle: "Profile Edit", headerTitleAlign: 'center', headerStyle: { backgroundColor: colors.mint }}}/>

            <Stack.Screen name='ListMyPet' component={ListMyPet} options={{headerTitleAlign: 'center',headerStyle: { backgroundColor: colors.mint, }}} />

        </Stack.Navigator>
    )
}

const HomeTab = () => {
    return(
        <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}>
            <Stack.Screen name='HomePage' component={HomePage} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}


const NotificationTab = () => {
    return(
        <Stack.Navigator initialRouteName="Notification" screenOptions={{ headerStyle: { backgroundColor: "lightblue" }, headerTitleAlign: 'center' }}>
            <Stack.Screen name='Notification' component={Notification} />
        </Stack.Navigator>
    )
}


const DeclareTab = () => {
    return(
        <Stack.Navigator initialRouteName="Profile" screenOptions={{  headerTitleAlign: 'center', headerStyle: { backgroundColor: colors.mint } }}>
            <Stack.Screen name='Declare' component={Declare} />
            <Stack.Screen name='ScanScreen' component={ScanScreen} />
            <Stack.Screen name='LostPetDetails' component={LostPetDetails}  options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}




const Tab = () => { 
    return(
        <TabStack.Navigator initialRouteName='Home' screenOptions={{ 
            headerShown:false ,
            tabBarActiveTintColor: "#FF724C", 
            tabBarStyle: { backgroundColor: "#bad36d" }, 
            tabBarLabelStyle: { fontSize: 15 },
            tabBarInactiveTintColor: 'gray',
        }}>
            <TabStack.Screen name='Home' component={HomeTab} options={{ tabBarIcon: ({ color, size }) => {
                return <AntDesign name="home" size={24} color={color} />;  
            },}}  />
            <TabStack.Screen name='Declare' component={DeclareTab} options={{ tabBarIcon: ({ color, size }) => {
                return <AntDesign name="home" size={24} color={color} />;  
            }, }}  />

            <TabStack.Screen name='Noti' component={NotificationTab}
                options={{
                    tabBarIcon: ({ color, size }) => ( <AntDesign name="home" size={24} color={color} />),
                    // tabBarLabel: "", // หรือใช้ tabBarLabel: undefined,
                }}
            />
            <TabStack.Screen name='Profile' component={ProfileTab} options={{ tabBarIcon: ({ color, size }) => {
                return <AntDesign name="home" size={24} color={color} />;  
            }, }}  />

            
        </TabStack.Navigator>
    )
}

const MainNavigator = () => { 
    return(
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Tab" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Authen" component={Authen} />
                <Stack.Screen name='Tab' component={Tab} />
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