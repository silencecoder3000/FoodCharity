import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Authentication from "./src/components/auth/organisms/Authentication";
import SplashScreen from "./src/components/auth/organisms/SplashScreen";
import RolScreen from "./src/components/auth/organisms/RolScreen";

export default function App() {
  const [isShowed, setIsShowed] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowed(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {isShowed ? <SplashScreen /> : <RolScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
