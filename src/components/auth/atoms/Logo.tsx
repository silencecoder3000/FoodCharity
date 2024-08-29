import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image } from "react-native";

export default function Logo() {
  return (
    <Image style={styles.BA} source={require("../../../assets/logo.png")} />
  );
}
const styles = StyleSheet.create({
  BA: {
    height: 120,
    width: 300,
    marginTop: 150,
  },
});
