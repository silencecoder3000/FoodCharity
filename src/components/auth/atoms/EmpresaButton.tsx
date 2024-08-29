import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
export default function EmpresaButton() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <TouchableOpacity
      style={[
        styles.optionBox,
        selectedOption === "option1" && styles.selectedOption,
      ]}
      onPress={() => handleSelectOption("option1")}
    >
      <Image
        source={require("../../../assets/empresa.png")} // Reemplaza con la imagen deseada
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>Empresa</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  selectedOption: {
    borderColor: "#007BFF", // Color del borde cuando seleccionado
    borderWidth: 2,
  },
  optionImage: {
    width: "100%",
    height: "80%",
    borderRadius: 8,
  },
  optionText: {
    marginTop: 8,
    textAlign: "center",
  },
  optionBox: {
    width: 150,
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 8,
  },
});
