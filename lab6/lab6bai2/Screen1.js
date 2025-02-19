import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";

export default function Screen1({ navigation }) {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào bạn, đây là màn hình chính</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên của bạn"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="ĐI TỚI MÀN HÌNH CHI TIẾT"
        onPress={() => navigation.navigate("Article", { userName: name, userId: "123" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold", color: "blue", marginBottom: 10 },
  input: { height: 40, borderColor: "gray", borderWidth: 1, width: "80%", marginBottom: 10, paddingHorizontal: 10 },
});
