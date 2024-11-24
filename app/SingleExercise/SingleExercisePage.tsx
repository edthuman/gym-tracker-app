import PageContext from "@/hooks/PageContext";
import UserContext from "@/hooks/UserContext";
import { Diary, ExerciseWithCategory } from "@/types";
import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Loading from "../Loading";
import ExerciseLogger from "./ExerciseLogger";

type DiaryResponse = Diary[] | { msg: string }

export default function SingleExercisePage({ exercise }: {exercise: ExerciseWithCategory }) {
    const {setPage} = useContext(PageContext)
    const { user: { username }} = useContext(UserContext)
    const apiURL = process.env.EXPO_PUBLIC_API_URL
    const [diary, setDiary] = useState<Diary | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [isLogging, setIsLogging] = useState(false)

    useEffect(() => {
        fetch(`${apiURL}/diaries?username=${username}&exercise=${exercise.name}`)
        .then(response => response.json())
        .then((returnedDiary: DiaryResponse) => {
            const hasDiary = Array.isArray(returnedDiary)
            if (hasDiary) {
                // There is only one diary for the each username-exercise combination, so it is always element 0 
                setDiary(returnedDiary[0])
            } 
            setIsLoading(false)
        })
    }, [])

    return isLoading ? (
        <Loading/>
    ): (
    setPage ? (
        <View style={styles.page}>
            {isLogging ? <ExerciseLogger exercise={exercise} diary={diary} isLogging={isLogging} setIsLogging={setIsLogging}/> : null}
            <Pressable onPress={() => setPage(`${exercise.category}`)} style={styles.backButton}>
                <Text>
                    {"<--"} Go back
                </Text>
            </Pressable>
            <Text style={styles.title}>{`${exercise.name}`}</Text>
            <Text style={styles.description}>{`${exercise.description}`}</Text>
            <Pressable style={styles.logButton} onPress={() => setIsLogging(true)}>
                <Text style={styles.logText}>Log exercise</Text>
            </Pressable>
        </View>
    ) : null)
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