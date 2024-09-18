import { StyleSheet, Text, View } from "react-native";
import HomeButtons from "./HomeButtons";
import {
  useFonts,
  Ubuntu_500Medium,
  Ubuntu_400Regular
} from '@expo-google-fonts/ubuntu';

export default function Index() {
  let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium })
  
  return fontsLoaded ? (
    <View style={styles.page}>
      <View style={styles.header} >
        <Text style={styles.text}>SESH</Text>
      </View>
      <HomeButtons/>
    </View>
  ) : (
    <View style={styles.loadingView}>
      <Text style={styles.text}>App loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: "5%",
    flex: 1,
    backgroundColor: "green",
    justifyContent: "space-between"
  },
  header: {
    backgroundColor: "red",
    alignItems: 'center',
    borderColor: "white"
  },
  text: {
    textAlign: "center",
    backgroundColor: "#2f2b21",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 50,
    color: "white",
    fontFamily: "Ubuntu_500Medium",
    borderRadius: 9,
    overflow: "hidden"
  },
  loadingView: {
    flex: 1,
    height: "30%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: 'center',
    borderColor: "white"
  }
})