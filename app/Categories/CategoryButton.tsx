import { Pressable, StyleSheet, Text } from "react-native";

export default function CategoryButton({ text }: {text: string}) {
    return <Pressable style={styles.button} onPress={() => console.log(text)}>
        <Text style={styles.text}>
            {`${text}`}
        </Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#8c9598",
        padding: 50,
        borderRadius: 9
   },
   text: {
        color: "cyan",
        fontSize: 30,
        fontFamily: "Ubuntu_500Medium",
        textAlign: "center"
   }
})