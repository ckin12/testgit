import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function Screen2({ route, navigation }) {
  const { userName, userId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào bạn, {userName}</Text>
      <Text>ID của bạn là, {userId}</Text>
      <View style={styles.buttonContainer}>
        <Button title="TRỞ LẠI BẰNG - GO BACK" onPress={() => navigation.goBack()} />
        <Button title="TRỞ LẠI BẰNG - RESET" onPress={() => navigation.reset({ index: 0, routes: [{ name: "Home" }] })} />
        <Button title="TRỞ LẠI BẰNG - POP" onPress={() => navigation.pop()} />
        <Button title="TRỞ LẠI BẰNG - POPTOPOP" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold", color: "blue", marginBottom: 10 },
  buttonContainer: { marginTop: 20, width: "80%", gap: 10 },
});
