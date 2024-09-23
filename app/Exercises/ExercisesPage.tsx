import PageContext from "@/hooks/PageContext";
import { Exercise } from "@/types";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ExerciseButton from "./ExerciseButton";

export default function ExercisesPage({category}: {category: any}) {
    const {setPage} = useContext(PageContext)
    const categoryName = Object.keys(category)[0]

    const icons = {
        default: require("../../assets/icons/dumbell.png")
    }
    
    return setPage ? (
        <View style={styles.page}>
            <Pressable onPress={() => setPage("CategoriesPage")} style={styles.backButton}>
                <Text>
                    {"<-"} Go back
                </Text>
            </Pressable>
            <Text style={styles.title}>
                    {categoryName} Exercises:
                </Text>
            <View style={styles.exercisesArea}>  
                {category[categoryName].map((exercise: Exercise) => <ExerciseButton exercise={exercise} key={exercise.name} icons={icons}/>)}
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
        flexWrap: "wrap",
        flexDirection: "row",
        alignContent: "space-around",
        justifyContent: "space-around"
    },
    title: {
        backgroundColor: "cyan",
        textAlign: "center",
        paddingVertical: "3%",
        fontSize: 20
    }

})