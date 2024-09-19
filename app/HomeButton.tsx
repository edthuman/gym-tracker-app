import { HomeButtonProps } from "@/types";
import { Pressable, StyleSheet, Text } from "react-native";

export default function HomeButton({ text, setModalVisible, style }: HomeButtonProps) {
    return <Pressable style={[style, styles.button]} onPress={() => setModalVisible(text)}>
    <Text style={styles.text}>{text}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
    text: {
        paddingVertical: 12,
        textAlign: "center",
        color: "white",
        fontFamily: "Ubuntu_400Regular",
        fontSize: 42,
    },
    button: {
        borderRadius: 11
    }
})