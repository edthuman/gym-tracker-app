import { HomeButtonProps } from "@/types";
import { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";

export default function HomeButton({ text, setModalVisible, style }: HomeButtonProps) {
    const buttonOpacity = useRef(new Animated.Value(1)).current;

    function flicker() {
        const fadeOut = Animated.timing(buttonOpacity, {
        toValue: 0.3,
        duration: 250,
        useNativeDriver: true,
        delay: 0
        });
        
        const fadeIn = Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
        delay: 0.2
        });

        Animated.sequence([fadeOut, fadeIn]).start()
    }

    return <Pressable onPress={() => {flicker(); setModalVisible(text)}}>
        <Animated.View style={[style, styles.button, {opacity: buttonOpacity}]}>
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