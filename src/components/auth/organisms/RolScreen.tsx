import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Logo from "../atoms/Logo";
import Roles from "../molecules/Roles";
import ActionButton from "../atoms/ActionButton";
export default function RolScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
        <Text style={styles.text}> Nombre </Text>
        <TextInput style={styles.input} placeholder="Ingrese su nombre" />

        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
        />
      </View>

      <Roles />

      <View style={styles.stepContainer}>
        <Text style={styles.text}>RUC/CI</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su RUC/CI"
          keyboardType="numeric"
        />
        <Text style={styles.text}>Correo Electronico</Text>
        <TextInput style={styles.input} placeholder="Ingrese su e-mail" />
      </View>

      <ActionButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFEF",
    justifyContent: "center",
  },

  stepContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
    marginBottom: 30,
    backgroundColor: "#FFFFEF",
    padding: 16,
  },
  input: {
    marginLeft: 10,
    width: 350,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  logo: {
    height: 90,
    width: 170,
    alignSelf: "center",
    marginTop: 80,
  },
  text: {
    marginLeft: 10,
  },
});
