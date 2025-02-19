import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function Screen2({ route, navigation }) {
  const { userName, userId } = route.params || { userName: "Guest", userId: "N/A" };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào bạn, {userName}</Text>
      <Text>ID của bạn là: {userId}</Text>

      <View style={styles.buttonContainer}>
        <Button title="🔙 GO BACK" onPress={() => navigation.goBack()} />
        <Button title="🔄 RESET" onPress={() => navigation.reset({ index: 0, routes: [{ name: "Screen1" }] })} />
        <Button title="⬅️ POP" onPress={() => navigation.pop()} />
        <Button title="🏠 POP TO TOP" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", color: "blue", marginBottom: 10 },
  buttonContainer: { marginTop: 20, width: "80%" },
});