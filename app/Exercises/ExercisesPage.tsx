import PageContext from "@/hooks/PageContext";
import { Category } from "@/types";
import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ExercisesPage({category}: {category?: Category}) {
    const {setPage} = useContext(PageContext)
    
    return setPage ? (
        <View style={styles.page}>
            <Pressable onPress={() => setPage("CategoriesPage")} style={styles.backButton}>
                <Text>
                    {"<-"} Go back
                </Text>
            </Pressable>
            <View style={styles.exercisesArea}>
                <Text style={styles.title}>
                    {category} Exercises:
                </Text>
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
        marginBottom: "5%"
    },
    title: {
        backgroundColor: "cyan",
        textAlign: "center",
        paddingVertical: "3%",
        fontSize: 20
    }

})