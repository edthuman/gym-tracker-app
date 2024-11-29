import { BooleanStateSetter } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function LogSuccessMessage({ setIsLogging, setHasLogged }: { setIsLogging: BooleanStateSetter, setHasLogged: BooleanStateSetter }) {
    return <View style={styles.view}>
        <Text style={styles.successMessage}>Log successfully added!</Text>
        <View style={styles.buttonsArea}>
            <Pressable onPress={() => setHasLogged(false)} style={styles.button}>
                <Text>Log again</Text>
            </Pressable>
            <Pressable onPress={() => setIsLogging(false)} style={styles.button}>
                <Text>Close</Text>
            </Pressable>
        </View>
    </View>
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "white",
        height: "93%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    successMessage: {
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center",
        paddingVertical: 25
    },
    buttonsArea: {
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        backgroundColor: "brown",
        width: "35%",
        height: 50,
        alignItems: "center",
        verticalAlign: "middle",
        justifyContent: "center"
    } 
})