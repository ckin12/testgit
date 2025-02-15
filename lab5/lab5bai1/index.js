import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading"; // Nếu dùng Expo SDK 45 trở về trước
import { styles } from "./styles"; // Import styles

const Lab5Bai1 = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        Font.loadAsync({
            "Roboto-Regular": require("../assets/fonts/Montserrat-ExtraBoldItalic.ttf"), // Đúng đường dẫn
        }).then(() => setFontsLoaded(true));
    }, []);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { fontFamily: "Roboto-Regular" }]}>
                React Native là các đoạn code đã được viết sẵn (framework) do công ty công nghệ Facebook phát triển.
                Các lập trình viên React Native là người sử dụng những framework này để phát triển nên các hệ thống,
                nền tảng ứng dụng trên các hệ điều hành như iOS và Android. Ngôn ngữ lập trình được sử dụng nhiều nhất là Javascript.
            </Text>
        </View>
    );
};

export default Lab5Bai1;
