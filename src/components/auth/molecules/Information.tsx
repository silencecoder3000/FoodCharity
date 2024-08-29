import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Data from "../atoms/Data";
export default function Information() {
  return (
    <View style={styles.subcontainer}>
      <Text>Usuario</Text>
      <Data />
      <Text>Contraseña</Text>
      <Data />
    </View>
  );
}

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 40,
  },
});
