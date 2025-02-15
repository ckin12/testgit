import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles'; // 🛠️ Thêm dòng này để import styles.js
import { Feather } from '@expo/vector-icons';


const DetailScreen = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* Nút Back */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={24} color="white" />
                </TouchableOpacity>

                {/* Nút 3 chấm */}
                <TouchableOpacity style={styles.menuButton} onPress={() => console.log("Menu clicked")}>
                    <Feather name="more-vertical" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Ảnh nền */}
            <ImageBackground
                source={{ uri: 'https://kyuchoian.com/userfiles/image/tour/hoi-an/2020/bo-anh-dep-hoi-an/pho-co/tren-cao/hoi-an-tren-cao-1.jpg' }}
                style={styles.imageBackground}
                resizeMode="cover" // 🛠️ Giữ tỉ lệ ảnh đúng
            >

                <Text style={styles.title}>PHỐ CỔ HỘI AN</Text>

                {/* Đánh giá */}
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star" style={styles.starIcon} />
                    <Text style={styles.ratingText}>5.0</Text>
                </View>

                {/* Nút yêu thích */}
                <TouchableOpacity style={styles.heartIcon}>
                    <FontAwesome name="heart" size={20} color="red" />
                </TouchableOpacity>
            </ImageBackground>

            {/* Nội dung chi tiết */}
            <View style={styles.infoContainer}>
                <Text style={styles.location}>
                    <MaterialIcons name="place" size={16} color="#007BFF" /> Quảng Nam
                </Text>

                <Text style={styles.sectionTitle}>Thông tin chuyến đi</Text>

                <Text style={styles.description}>
                    Hội An là một thành phố thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ Hội An từng là một thương cảng
                    quốc tế sầm uất, với nhiều di sản kiến trúc cổ có từ hàng trăm năm trước, được UNESCO công nhận
                    là di sản văn hóa thế giới năm 1999.
                </Text>

                {/* Giá & Nút đặt */}
                <View style={styles.bottomContainer}>
                    <Text style={styles.priceText}>$100<Text style={styles.perDay}> /Ngày</Text></Text>
                    <TouchableOpacity style={styles.bookButton}>
                        <Text style={styles.bookButtonText}>Đặt ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default DetailScreen;
