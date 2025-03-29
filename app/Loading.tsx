import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
    return <View style={styles.view}>
        <Text style={styles.text}>Loading...</Text>
    </View>
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 48,
        color: "white",
        fontFamily: "Ubuntu_500Medium",
    }
})