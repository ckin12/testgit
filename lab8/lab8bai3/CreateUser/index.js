import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import moment from 'moment';

const CreateUserScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleCreateUser = async () => {
        const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');

        try {
            const response = await axios.post('http://192.168.1.100:5000/users',
                { name, date: formattedDate },
                { headers: { 'Content-Type': 'application/json' } }
            );

            Alert.alert('Thành công', 'Tạo tài khoản thành công');
            navigation.navigate('UserCreated', { name, date: formattedDate }); // Điều hướng đến màn hình mới
        } catch (error) {
            console.log('Lỗi API:', error.response?.data || error.message);
            Alert.alert('Lỗi', error.response?.data?.message || 'Không thể tạo tài khoản');
        }
    };

    return (
        <View style={{ padding: 16 }}>
            <TextInput placeholder="Tên" value={name} onChangeText={setName} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
            <TextInput placeholder="Ngày tạo (YYYY-MM-DD)" value={date} onChangeText={setDate} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
            <Button title="Tạo tài khoản" onPress={handleCreateUser} />
        </View>
    );
};

export default CreateUserScreen;
