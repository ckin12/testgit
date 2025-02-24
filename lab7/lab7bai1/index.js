import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

// Tạo các màn hình
const HomeScreen = () => (
    <View style={styles.screen}>
        <Text style={styles.text}>Home Screen</Text>
    </View>
);
const SearchScreen = () => (
    <View style={styles.screen}>
        <Text style={styles.text}>Search Screen</Text>
    </View>
);
const NotificationsScreen = () => (
    <View style={styles.screen}>
        <Text style={styles.text}>Notifications Screen</Text>
    </View>
);
const ProfileScreen = () => (
    <View style={styles.screen}>
        <Text style={styles.text}>Profile Screen</Text>
    </View>
);

// Tạo Tab Navigator
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = "home";
                    } else if (route.name === "Search") {
                        iconName = "search";
                    } else if (route.name === "Notifications") {
                        iconName = "notifications";
                    } else if (route.name === "Profile") {
                        iconName = "person";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarLabel: ({ focused }) =>
                    focused ? <Text style={{ fontSize: 12 }}>{route.name}</Text> : null,
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
