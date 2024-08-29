import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ActionButton() {
  return (
    <View style={styles.buttonContainer}>
      {/* Botón de Registrar */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </TouchableOpacity>

      {/* Botón de ayuda */}
      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpButtonText}>¿Necesitas ayuda?</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    marginBottom: 100,
  },
  registerButton: {
    backgroundColor: "#28a745", // Verde
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff", // Texto blanco
    fontSize: 16,
    fontWeight: "bold",
  },
  helpButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  helpButtonText: {
    color: "#007BFF", // Color del texto del botón de ayuda
    fontSize: 16,
    fontWeight: "bold",
  },
});
