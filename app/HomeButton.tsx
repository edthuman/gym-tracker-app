import { HomeButtonProps } from "@/types";
import { useContext, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";
import { flicker } from "./animations";
import UserContext from "../hooks/UserContext";
import PageContext from "@/hooks/PageContext";

export default function HomeButton({ text, style }: HomeButtonProps) {
    const opacity = useRef(new Animated.Value(1)).current;

    const { setUser } = useContext(UserContext)
    const loggedInUser = {
        username: "ed",
        _id: "66c9c273e85475b32ec8679b"
    }
    const { setPage } = useContext(PageContext)

    return setUser && setPage ? (
        <Pressable onPress={() => {flicker(opacity); setUser(loggedInUser); setPage("WelcomePage")}}>
            <Animated.View style={[style, styles.button, {opacity}]}>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </Pressable>
    ) : null
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