import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function HomeButtons () {
    return <View style={styles.buttonsView}>
    <TouchableOpacity style={styles.signUp}>
      <Text style={styles.text}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.logIn}>
      <Text style={styles.text}>Log In</Text>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
    buttonsView: {
      height: "31%",
      justifyContent: "space-between",
      paddingHorizontal: "8%",
      paddingBottom: "2%"
    },
    signUp: {
      backgroundColor: "#539E75",
      borderRadius: 9
    },
    logIn: {
      borderRadius: 9,
      borderStyle: "solid",
      borderWidth: 4,
      borderColor: "white"
    },
    text: {
      paddingVertical: 12,
      textAlign: "center",
      color: "white",
      fontFamily: "Ubuntu_400Regular",
      fontSize: 42,
    }
  })