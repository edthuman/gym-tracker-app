import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {  
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack screenOptions={{ headerShown: false}}>
        <Stack.Screen name="index"/>
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "green",
  }
})