import { Pressable, StyleSheet, Text, View } from "react-native"

export default function HomeButtons (props: any) {
  const {setModalVisible} = props

  return <View style={styles.buttonsView}>
    <Pressable style={styles.signUp} onPress={() => setModalVisible("sign up")}>
      <Text style={styles.text}>Sign Up</Text>
    </Pressable>
    <Pressable style={styles.logIn} onPress={() => setModalVisible("log in")}>
      <Text style={styles.text}>Log In</Text>
    </Pressable>
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