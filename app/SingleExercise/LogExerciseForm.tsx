import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { handleDateInput, handleLogInput, handleLogSubmit } from "./single-exercise-event-handlers";
import { getDateOneMonthAgo } from "./single-exercise-utils";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Diary, ExerciseWithCategory, LogFormData } from "@/types";

export function LogExerciseForm({username, diary, exercise}: {username: string, exercise: ExerciseWithCategory, diary: Diary | undefined,}) {
    const { category } = exercise
    const dateToday = new Date()
    const [logInputError, setLogInputError] = useState("")
    const [submissionError, setSubmissionError] = useState("")
    const [hasLogged, setHasLogged] = useState(false)
    const [formData, setFormData] = useState<LogFormData>({
        date: dateToday,
        log: "",
        units: category === "Strength" ? "kg" : "mins"
    })
    const logType = category === "Strength" ? "Weight" : "Time"
    
    return <View style={styles.loggingForm}>
        <View style={styles.inputElement}>
            <Text style={styles.inputLabel}>{logType}:</Text>
            <TextInput style={styles.input} placeholder="0" value={formData.log} onChangeText={input => handleLogInput(input, setFormData, setLogInputError)} />
            {logInputError ? <Text style={styles.errorText}>{logInputError}</Text> : null}
        </View>
        <View style={styles.inputElement}>
            <Text style={styles.inputLabel}>Date:</Text>
            <DateTimePicker 
                value={formData.date} 
                mode="date"
                onChange={(e, date)=> handleDateInput(e, date, setFormData)} 
                minimumDate={getDateOneMonthAgo()} 
                maximumDate={dateToday}
            />
        </View>
        {submissionError ? <Text>{submissionError}</Text> : null}
        <Pressable style={styles.submitButton} onPress={() => handleLogSubmit(username, diary, exercise, formData, setSubmissionError, setHasLogged)}>
            <Text>Submit</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    loggingForm: {
        backgroundColor: "blue",
        height: "93%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    inputElement: {
        height: "10%",
        backgroundColor: "magenta",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 30
    },
    inputLabel: {
        fontSize: 20,
        width: "30%",
        alignSelf: "center"
    },
    input: {
        width: 130,
        marginLeft: 10,
        marginBottom: 0,
        paddingBottom: 0,
        height: 35,
        textAlign: "right",
        paddingRight: 10,
    },
    errorText: {
        marginTop: 5,
        backgroundColor: "white"
    },
    submitButton: {
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 3
    }
})