import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "./screens/Profile";
import ProfileEdit from "./screens/ProfileEdit";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
      >
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{
            headerTitle: "Profile Edit",
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: colors.mint }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const colors = {
  mint: "#bad36d",
  tan: "#e2cc9b",
  sun: "#faaf6b",
  pinky: "#fadacb",
  ivory: "#f8f3df",
};
