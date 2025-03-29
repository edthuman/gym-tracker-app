import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigator from "./Navigator";
import { useEffect, useState } from "react";
import UserContext from "../hooks/UserContext";
import PageContext from "@/hooks/PageContext";
import { ExerciseWithCategory } from "@/types";
import Loading from "./Loading";

export default function RootLayout() {
    const [user, setUser] = useState({
        username: "guest",
        _id: "guest",
    });
    const userContextValues = { user, setUser };

    const [page, setPage] = useState<string>("HomePage")
    const pageContextValues = {page, setPage}

    const [exercises, setExercises] = useState<ExerciseWithCategory[]>([])
    const apiURL = process.env.EXPO_PUBLIC_API_URL
    useEffect(() => {
        fetch(`${apiURL}/exercises`)
        .then(response => response.json())
        .then(json => setExercises([...json.exercises]))
    }, [])

    return exercises.length ? (
        <SafeAreaView style={styles.safeArea}>
            <UserContext.Provider value={userContextValues}>
                <PageContext.Provider value={pageContextValues}>
                    <Navigator exercises={exercises}/>
                </PageContext.Provider>
            </UserContext.Provider>
        </SafeAreaView>
    ) : (
    <SafeAreaView style={styles.safeArea}>
        <Loading/>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "green",
    },
});
