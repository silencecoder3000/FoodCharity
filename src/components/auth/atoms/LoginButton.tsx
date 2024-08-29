import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Pressable } from "react-native";

export default function LoginButton() {
  return (
    <Pressable style={styles.register}>
      <Text style={styles.texto}> Iniciar Sesion </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  register: {
    borderRadius: 20,
    backgroundColor: "#228154",
    height: 40,
    width: 300,
    marginBottom: 40,
  },
  texto: {
    alignSelf: "center",
    marginTop: 8,
    color: "#fff",
  },
});
