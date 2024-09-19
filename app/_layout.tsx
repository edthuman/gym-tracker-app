import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from "./Navigator";

export default function RootLayout() {  
  return (
    <SafeAreaView style={styles.safeArea}>
      <Navigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "green",
  }
})