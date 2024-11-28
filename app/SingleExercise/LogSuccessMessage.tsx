import { Pressable, StyleSheet, Text, View } from "react-native";

export function LogSuccessMessage() {
    return <View>
        <Text style={styles.successMessage}>Log successfully added!</Text>
        <Pressable onPress={()=>console.log("log again pressed")}>
            <Text>Log again</Text>
        </Pressable>
        <Pressable onPress={()=>console.log("close pressed")}>
            <Text>Close</Text>
        </Pressable>
    </View>
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