import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import styles from './styles';

const EditUserScreen = ({ route, navigation }) => {
    const { user } = route.params;
    const [name, setName] = useState(user.name);
    const [date, setDate] = useState(user.date);

    // Hàm gọi API để cập nhật thông tin người dùng
    const updateUser = async () => {
        try {
            await axios.put(`http://192.168.1.100:5000/users/${user.id}`, {
                name,
                date,
            });
            Alert.alert('Thành công', 'Cập nhật thông tin người dùng thành công!');
            navigation.goBack(); // Quay lại màn hình trước
        } catch (error) {
            console.error('Lỗi khi cập nhật thông tin người dùng:', error);
            Alert.alert('Lỗi', 'Không thể cập nhật thông tin người dùng.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chỉnh sửa tài khoản {user.name}</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Tên người dùng"
            />
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={setDate}
                placeholder="Ngày sinh (YYYY-MM-DD)"
                keyboardType="default"
            />
            <Button title="Cập nhật thông tin" color="orange" onPress={updateUser} />
        </View>
    );
};

export default EditUserScreen;
