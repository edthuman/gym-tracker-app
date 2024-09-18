import { StyleSheet, Text, View } from "react-native"

export default function HomeButtons () {
    return <View style={styles.buttonsView}>
    <Text style={styles.signUp}>Sign Up</Text>
    <Text style={styles.logIn}>Log In</Text>
  </View>
}

const styles = StyleSheet.create({
    buttonsView: {
      height: "35%",
      justifyContent: "space-between",
      backgroundColor: "pink",
      paddingHorizontal: "8%",
      paddingBottom: "5%"
    },
    signUp: {
      textAlign: "center",
      backgroundColor: "#539E75",
      paddingVertical: 12,
      fontSize: 50,
      color: "white",
      fontFamily: "Ubuntu_400Regular",
      borderRadius: 9,
      overflow: "hidden"
    },
    logIn: {
      textAlign: "center",
      paddingVertical: 12,
      fontSize: 50,
      color: "white",
      fontFamily: "Ubuntu_400Regular",
      borderRadius: 9,
      borderColor: "white",
      borderWidth: 4,
      borderStyle: "dashed",
      overflow: "hidden"
    }
  })