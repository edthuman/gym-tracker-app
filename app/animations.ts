import { Animated } from "react-native";

export function flicker(opacity: Animated.Value) {
    const fadeOut = Animated.timing(opacity, {
    toValue: 0.3,
    duration: 250,
    useNativeDriver: true,
    delay: 0
    });
    
    const fadeIn = Animated.timing(opacity, {
    toValue: 1,
    duration: 350,
    useNativeDriver: true,
    delay: 0.2
    });

    Animated.sequence([fadeOut, fadeIn]).start()
}