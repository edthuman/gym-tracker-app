import { StyleSheet, Text, View } from "react-native";

export default function Index() {

  return <View style={styles.page}>
    <View style={styles.view} >
      <Text style={styles.text}>SESH</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: "5%",
    flex: 1,
    backgroundColor: "green"
  },
  view: {
    flex: 1,
    height: "30%",
    backgroundColor: "red",
    justifyContent: "flex-start",
    alignItems: 'center',
    borderColor: "white",
  },
  text: {
    textAlign: "center",
    backgroundColor: "#2f2b21",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 50,
    color: "white",
    borderRadius: 9,
    overflow: "hidden"
  }
})