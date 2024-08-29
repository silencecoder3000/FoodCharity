import { View, StyleSheet } from "react-native";
import EmpresaButton from "../atoms/EmpresaButton";
import OngButton from "../atoms/OngButton";

export default function Roles() {
  return (
    <View style={styles.optionContainer}>
      <EmpresaButton />
      <OngButton />
    </View>
  );
}
const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    marginBottom: 26,
  },
});
