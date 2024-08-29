import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RegisterButton from "../atoms/RegisterButton";
import LoginButton from "../atoms/LoginButton";
export default function AuthButtons() {
  return (
    <View style={styles.subcontainer}>
      <LoginButton />
      <RegisterButton />
      <Text style={styles.texto}> Olvide mi Usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    marginBottom: 70,
  },
  texto: {
    alignSelf: "center",
  },
});
