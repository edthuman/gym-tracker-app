import { BooleanStateSetter, Diary, ExerciseWithCategory, LogFormData } from "@/types";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { getDateString } from "./single-exercise-utils";
import axios from "axios";

type SetFormData = React.Dispatch<React.SetStateAction<LogFormData>>
type StringStateSetter = React.Dispatch<React.SetStateAction<string>>

export function handleLogInput(input: string, setFormData: SetFormData, setLogInputError: StringStateSetter): void {
    const isInputNan = Number.isNaN(Number(input))
    if (isInputNan) {
        setLogInputError("Log must be a number")
        return
    }
    if (Number(input) > 9999) {
        setLogInputError("Logs must be below 10,000")
        return
    }
    setFormData(currentData => {
        return {
            ...currentData,
            log: input
        }
    })
    setLogInputError("")
    return
}

export function handleDateInput(e: DateTimePickerEvent, date: Date | undefined, setFormData: SetFormData): void {
    if (!date) {
        return
    }

    const { nativeEvent: { timestamp } } = e;

    setFormData(currData => {
        return {
            ...currData,
            date: new Date(timestamp)
        }
    })
}

export async function handleLogSubmit(username:string, diary: Diary | undefined, exercise: ExerciseWithCategory, formData: LogFormData, setError: StringStateSetter, setHasLogged: BooleanStateSetter) {
    setError("")
    if (!exercise.name) {
        setError("Something went wrong logging this exercise")
        return
    }
    if (!username) {
        setError("Could not update/add log with this account")
        return
    }
    const {date, log } = formData
    if (!log) {
        setError("Log must have value")
        return
    }
    const logIsNaN = Number.isNaN(Number(log))
    if (logIsNaN) {
        setError("Logged value must be a number")
        return
    }
    if (Number(log) <= 0) {
        setError("Logged value must be greater than 0")
        return
    }
    if (Number(log) > 9999) {
        setError("Logged value must be less than 10,000")
        return
    }
    if (!date) {
        setError("Invalid date given")
        return
    }

    const apiURL = process.env.EXPO_PUBLIC_API_URL
    if (!apiURL) {
        setError("Something went wrong, could not add log")
        return
    }

    const diaryExists = diary !== undefined

    const diaryToAdd: any = {}
    if (diaryExists) {
        diaryToAdd.logs = [{
            log: Number(log),
            date: getDateString(date)
        }]
    } else {
        diaryToAdd.username = username
        diaryToAdd.exercise = exercise.name
        diaryToAdd.logs = [{
            log: Number(log),
            date: getDateString(date)
        }]
    }
    
    if (diaryExists) {
        const response = await axios.patch(`${apiURL}/diaries/${diary._id}`, diaryToAdd)
            .then(response => response.data)
            .catch(error => {
                const { msg } = error.response.data
                setError(msg)
            })
            if (!response) {
                setError("Something went wrong, please try again")
            } else {
                setHasLogged(true)
            }
    } else {
        const response = await axios.post(`${apiURL}/diaries`, diaryToAdd)
            .then(response => response.data)
            .catch(error => {
                const { msg } = error.response.data
                setError(msg)
            })
        if (response) {
            setHasLogged(true)
        } else {
            setError("Something went wrong, please try again")
        }
    }
}