import { StyleSheet, TextInput } from "react-native";

export default function Data() {
  return <TextInput style={styles.data} placeholder="|"></TextInput>;
}
const styles = StyleSheet.create({
  data: {
    height: 50,
    width: 330,
    borderRadius: 5,
    borderColor: "#000000",
    backgroundColor: "#f0f0f0",
  },
});
