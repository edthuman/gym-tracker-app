import { HomeButtonsProps } from "@/types"
import { StyleSheet, View } from "react-native"
import HomeButton from "./HomeButton"

export default function HomeButtons({ setModalVisible }: HomeButtonsProps) {

  return <View style={styles.buttonsView}>
    <HomeButton setModalVisible={setModalVisible} text={"Sign Up"} style={styles.signUp}/>
    <HomeButton setModalVisible={setModalVisible} text={"Log In"} style={styles.logIn}/>
  </View>
}

const styles = StyleSheet.create({
    buttonsView: {
      height: "29.5%",
      justifyContent: "space-between",
      paddingHorizontal: "8%",
      paddingBottom: "3%"
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