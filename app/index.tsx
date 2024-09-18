import { Image, StyleSheet, Text, View } from "react-native";
import HomeButtons from "./HomeButtons";
import {
  useFonts,
  Ubuntu_500Medium,
  Ubuntu_400Regular
} from '@expo-google-fonts/ubuntu';

export default function Index() {
  let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium })
  const backgroundImage = require("../assets/images/home-image.jpg")

  return fontsLoaded ? (<>
  <Image source={backgroundImage} style={styles.background}/>
  <View style={styles.page}>
    <View style={styles.header}>
      <Text style={styles.title}>SESH</Text>
    </View>
    <HomeButtons/>
  </View>
  </>
  ) : (
    <View style={styles.loadingView}>
      <Text style={styles.loadingMessage}>App loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    position: "absolute",
    paddingVertical: "5%",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-between"
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "130%",
    alignSelf: "center"
  },
  header: {
    alignItems: 'center',
    borderColor: "white"
  },
  title: {
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
  },
  loadingMessage: {
    textAlign: "center",
    fontSize: 50,
    color: "white",
    fontFamily: "Ubuntu_500Medium",
  }
})