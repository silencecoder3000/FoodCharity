import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../atoms/Logo";
import Information from "../molecules/Information";
import AuthButtons from "../molecules/AuthButtons";
export default function Authentication() {
  return (
    <View style={styles.container}>
      <Logo />
      <Information />
      <AuthButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
