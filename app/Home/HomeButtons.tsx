import { StyleSheet, View } from "react-native"
import HomeButton from "./HomeButton"

export default function HomeButtons() {

  return <View style={styles.buttonsView}>
    <HomeButton text={"Sign Up"} style={styles.signUp}/>
    <HomeButton text={"Log In"} style={styles.logIn}/>
  </View>
}

const styles = StyleSheet.create({
    buttonsView: {
      height: "28%",
      justifyContent: "space-between",
      paddingHorizontal: "8%",
      paddingBottom: "1%"
    },
    signUp: {
      backgroundColor: "#539E75",
    },
    logIn: {
      borderStyle: "solid",
      borderWidth: 4,
      borderColor: "white"
    }
  })