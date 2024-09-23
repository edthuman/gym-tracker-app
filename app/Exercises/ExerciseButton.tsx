import { Exercise } from "@/types";
import { Pressable, StyleSheet, Text } from "react-native";

export default function ExerciseButton({exercise}: {exercise: Exercise}) {
    return <Pressable style={styles.button} onPress={()=>console.log(exercise.name)}>
        <Text>
            {exercise.name}
        </Text>
        <Text>
            {exercise.description}
        </Text>
        <Text>
            {exercise.icon}
        </Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "magenta"
    }
})