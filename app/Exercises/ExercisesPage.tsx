import PageContext from "@/hooks/PageContext";
import { Exercise } from "@/types";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ExerciseButton from "./ExerciseButton";

export default function ExercisesPage({category}: {category: any}) {
    const {setPage} = useContext(PageContext)
    const categoryName = Object.keys(category)[0]
    
    return setPage ? (
        <View style={styles.page}>
            <Pressable onPress={() => setPage("CategoriesPage")} style={styles.backButton}>
                <Text>
                    {"<-"} Go back
                </Text>
            </Pressable>
            <View style={styles.exercisesArea}>
                <Text style={styles.title}>
                    {categoryName} Exercises:
                </Text>
                {category[categoryName].map((exercise: Exercise) => <ExerciseButton exercise={exercise} key={exercise.name}/>)}
            </View>
        </View>
    ) : null
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
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
        flex: 3,
        marginBottom: "5%",
        justifyContent: "space-between"
    },
    title: {
        backgroundColor: "cyan",
        textAlign: "center",
        paddingVertical: "3%",
        fontSize: 20
    }

})