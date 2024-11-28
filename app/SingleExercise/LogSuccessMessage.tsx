import { StyleSheet, Text } from "react-native";

export function LogSuccessMessage() {
    return <Text style={styles.successMessage}>Log successfully added!</Text>
}

const styles = StyleSheet.create({
    successMessage: {
        backgroundColor: "blue",
        height: "90%",
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center",
        paddingVertical: "70%"
    }
})