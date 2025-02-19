//npm install @react-navigation/drawer
import 'react-native-gesture-handler';
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
const Drawer = createDrawerNavigator();

const Lab62 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Screen1} />
        <Drawer.Screen name="Article" component={Screen2} />
        <Drawer.Screen name="Chat" component={Screen3} />
        <Drawer.Screen name="Setting" component={Screen4} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Lab62;
