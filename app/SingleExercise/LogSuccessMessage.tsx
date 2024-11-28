import { BooleanStateSetter } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function LogSuccessMessage({ setIsLogging, setHasLogged }: { setIsLogging: BooleanStateSetter, setHasLogged: BooleanStateSetter }) {
    return <View>
        <Text style={styles.successMessage}>Log successfully added!</Text>
        <Pressable onPress={() => setHasLogged(false)}>
            <Text>Log again</Text>
        </Pressable>
        <Pressable onPress={() => setIsLogging(false)}>
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