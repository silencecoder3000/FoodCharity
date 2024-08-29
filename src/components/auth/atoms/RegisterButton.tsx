import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Pressable } from "react-native";

export default function RegisterButton() {
  return (
    <Pressable style={styles.register}>
      <Text style={styles.texto}> Registrarme</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  register: {
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    borderStyle: "solid",
    borderBlockColor: "#000",
    height: 40,
    width: 300,
    marginBottom: 40,
  },
  texto: {
    alignSelf: "center",
    marginTop: 8,
  },
});
