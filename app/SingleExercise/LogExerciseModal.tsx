import { Diary, ExerciseWithCategory, LogFormData } from "@/types";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { handleLogInput } from "./single-exercise-event-handlers";

export default function LogExerciseModal({exercise, diary, isLogging, setIsLogging}: {exercise: ExerciseWithCategory, diary: Diary | undefined, isLogging: boolean, setIsLogging: React.Dispatch<React.SetStateAction<boolean>>}) {
    const { category } = exercise
    const [formData, setFormData] = useState<LogFormData>({
        date: new Date(),
        log: "0",
        units: category === "Strength" ? "kg" : "mins"
    })
    const logType = category === "Strength" ? "Weight" : (category === "mins" ? "Time" : "Distance") 
    return <Modal visible={isLogging} transparent={true}>
        <View style={styles.background}>
            <View style={styles.modal}>
                <Pressable style={styles.closeButton} onPress={() => setIsLogging(false)}>
                    <Text style={styles.closeButtonText}>X</Text>
                </Pressable>
                <View style={styles.loggingForm}>
                    <View>
                        <Text>{logType}</Text>
                        <TextInput style={styles.input} value={formData.log} onChangeText={input => handleLogInput(input, setFormData)}></TextInput>
                    </View>
                </View>
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
    border: {
        backgroundColor: "blue",
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
    },
    loggingForm: {
        backgroundColor: "blue",
        height: "93%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: 20,
        backgroundColor: "white"
    }
})