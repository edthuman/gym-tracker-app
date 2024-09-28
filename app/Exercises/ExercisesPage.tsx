import PageContext from "@/hooks/PageContext";
import { Exercise } from "@/types";
import { useContext } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import ExerciseButton from "./ExerciseButton";

export default function ExercisesPage({ category }: { category: any }) {
    const { setPage } = useContext(PageContext);
    const categoryName = Object.keys(category)[0];

    const icons = {
        default: require("../../assets/icons/gym.png"),
        "ab-crunch": require("../../assets/icons/ab-crunch.png"),
        "bicep-curl": require("../../assets/icons/bicep-curl.png"),
        "butterfly": require("../../assets/icons/butterfly.png"),
        "calf-raise": require("../../assets/icons/building.png"),
        "chest-fly": require("../../assets/icons/chest-fly.png"),
        "cross-trainer": require("../../assets/icons/cross-trainer.png"),
        "lateral": require("../../assets/icons/lateral.png"),
        "leg-press": require("../../assets/icons/leg.png"),
        "hip": require("../../assets/icons/workout.png"),
        "pull-up": require("../../assets/icons/pull-up-bar.png"),
        "rowing": require("../../assets/icons/rowing-machine.png"),
        "shoulder-press": require("../../assets/icons/shoulder.png"),
        "stairs": require("../../assets/icons/promotion.png"),
        "stationary-bike": require("../../assets/icons/stationary-bike.png"),
        "treadmill": require("../../assets/icons/treadmill.png")
    } //require cannot use dynamic file paths
    
    return setPage ? (
        <View style={styles.page}>
            <Pressable
                onPress={() => setPage("CategoriesPage")}
                style={styles.backButton}
            >
                <Text>{"<-"} Go back</Text>
            </Pressable>
            <Text style={styles.title}>{categoryName} Exercises:</Text>
            <ScrollView style={styles.exercisesArea}>
                {category[categoryName].map((exercise: Exercise) => (
                    <ExerciseButton
                        exercise={exercise}
                        key={exercise.name}
                        icons={icons}
                    />
                ))}
            </ScrollView>
        </View>
    ) : null;
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "blue",
        paddingHorizontal: "5%",
        justifyContent: "space-around"
    },
    backButton: {
        backgroundColor: "white",
        marginVertical: "5%",
        paddingVertical: "5%",
        width: "30%",
        justifyContent: "center",
        alignItems: "center"
    },
    exercisesArea: {
        backgroundColor: "orange",
        marginBottom: "5%",
        flexDirection: "column"
    },
    title: {
        backgroundColor: "cyan",
        textAlign: "center",
        paddingVertical: "3%",
        fontSize: 20
    },
});
