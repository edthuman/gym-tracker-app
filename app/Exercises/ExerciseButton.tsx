import { Exercise } from "@/types";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ExerciseButton({exercise, icons }: {exercise: Exercise, icons: any}) {
    const isIconFileValid = Object.keys(icons).includes(exercise.icon)

    let icon
    if (isIconFileValid) {
        icon = icons[exercise.icon]
    } else {
        icon = icons.default
    }

    return <Pressable style={styles.button} onPress={()=>console.log(exercise.name)}>
        <View style={styles.elements}>
            <Image source={icon} style={styles.icon}/>
            <Text style={styles.name}>
                {exercise.name}
            </Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "magenta",
        height: "30%",
        width: "45%",
        paddingVertical: "2%"
    },
    elements: {
        height: "100%",
        backgroundColor: "grey",
        justifyContent: "space-around",
        alignItems: "center"
    },
    icon: {
        height: "70%",
        width: "70%",
        resizeMode: "contain"
    },
    name: {
        fontSize: 25,
        textAlign: "center"
    }
})