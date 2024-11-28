import { BooleanStateSetter, Diary, ExerciseWithCategory } from "@/types";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { LogExerciseForm } from "./LogExerciseForm";
import { LogSuccessMessage } from "./LogSuccessMessage";

export default function LogExerciseModal({exercise, diary, isLogging, setIsLogging}: {exercise: ExerciseWithCategory, diary: Diary | undefined, isLogging: boolean, setIsLogging: BooleanStateSetter}) {
    const [hasLogged, setHasLogged] = useState(false)

    return <Modal visible={isLogging} transparent={true}>
        <View style={styles.background}>
            <View style={styles.modal}>
                <Pressable style={styles.closeButton} onPress={() => setIsLogging(false)}>
                    <Text style={styles.closeButtonText}>X</Text>
                </Pressable>
                {hasLogged ? (
                    <LogSuccessMessage setIsLogging={setIsLogging} setHasLogged={setHasLogged}/>
                ) : (
                    <LogExerciseForm exercise={exercise} diary={diary} setHasLogged={setHasLogged} />
                )}
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "transparent",
        height: "100%",
        width: "100%"
    },
    modal: {
        backgroundColor: "yellow",
        marginVertical: "auto",
        marginHorizontal: "auto",
        justifyContent: "space-between",
        height: "90%",
        width: "90%"
    },
    closeButton: {
        backgroundColor: "red",
        height: 33,
        width: 33,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
        alignSelf: "flex-end",
        marginRight: 7,
        marginTop: 7
    },
    closeButtonText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
})