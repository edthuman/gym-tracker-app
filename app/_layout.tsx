import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from "./Navigator";
import { useState } from "react";
import UserContext from "./UserContext";

export default function RootLayout() {
  const [user, setUser] = useState({
    username: "guest",
    _id: "guest"
  });
  const value = { user, setUser }

  return (
    <SafeAreaView style={styles.safeArea}>
      <UserContext.Provider value={value}>
        <Navigator/>
      </UserContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "green",
  }
})