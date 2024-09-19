import { HomeButtonProps } from "@/types";
import { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";
import { flicker } from "./animations";

export default function HomeButton({ text, setModalVisible, style }: HomeButtonProps) {
    const opacity = useRef(new Animated.Value(1)).current;

    return <Pressable onPress={() => {flicker(opacity); setModalVisible(text)}}>
        <Animated.View style={[style, styles.button, {opacity}]}>
            <Text style={styles.text}>{text}</Text>
        </Animated.View>
    </Pressable>
}

const styles = StyleSheet.create({
    text: {
        paddingVertical: 12,
        textAlign: "center",
        color: "white",
        fontFamily: "Ubuntu_400Regular",
        fontSize: 42
    },
    button: {
        borderRadius: 11
    }
})