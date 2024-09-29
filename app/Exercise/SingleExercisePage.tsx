import PageContext from "@/hooks/PageContext";
import { ExerciseWithCategory } from "@/types";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SingleExercisePage({ exercise }: {exercise: ExerciseWithCategory }) {
    const {setPage} = useContext(PageContext)
    return setPage ? (
    <View style={styles.page}>
            <Pressable onPress={() => setPage(`${exercise.category}`)} style={styles.backButton}>
                <Text>
                    {"<--"} Go back
                </Text>
            </Pressable>
        <Text style={styles.title}>{`${exercise.name}`}</Text>
        <Text style={styles.description}>{`${exercise.description}`}</Text>
        <Pressable style={styles.logButton} onPress={()=>{console.log(`${exercise.name} logged`)}}>
            <Text style={styles.logText}>Log exercise</Text>
        </Pressable>
    </View>
    ) : null
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "space-around",
        paddingHorizontal: "5%"
    },
    backButton: {
        backgroundColor: "white",
        marginVertical: "5%",
        paddingVertical: "5%",
        width: "30%",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        textAlign: "center"
    },
    description: {
        fontSize: 20,
        padding: "5%"
    },
    logButton: {
        backgroundColor: "red",
        height: "10%",
        justifyContent: "center"
    },
    logText: {
        fontSize: 15,
        textAlign: "center"
    }
})