import { ImageBackground, StyleSheet, Text, View } from "react-native";
import HomeButtons from "./HomeButtons";
import {
  useFonts,
  Ubuntu_500Medium,
  Ubuntu_400Regular
} from '@expo-google-fonts/ubuntu';
import Loading from "../Loading";

export default function HomePage() {
  let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium })
  const backgroundImage = require("../../assets/images/home-image.jpg")

  return fontsLoaded ? (<>
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}/>
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>SESH</Text>
      </View>
      <HomeButtons/>
    </View>
  </>) : (
    <Loading/>
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
    flex: 1
  },
  header: {
    paddingTop: "5%",
    alignItems: 'center',
    borderColor: "white"
  },
  title: {
    textAlign: "center",
    backgroundColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 80,
    color: "white",
    fontFamily: "Ubuntu_500Medium",
    borderRadius: 9,
    overflow: "hidden"
  }
})

const modalStyles = StyleSheet.create({
  modalLayer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modalBox: {
    verticalAlign: "middle",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
  },
  closeButton: {
    padding: "5%",
    backgroundColor: "red"
  },
  closeText: {
    color: "white"
  },
  text: {
    paddingBottom: "10%",
    color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
  }
});