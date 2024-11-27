import { LogFormData } from "@/types"
import { DateTimePickerEvent } from "@react-native-community/datetimepicker"

type SetFormData = React.Dispatch<React.SetStateAction<LogFormData>>

export function handleLogInput(input: string, setFormData: SetFormData, setLogInputError: React.Dispatch<React.SetStateAction<string>>): void {
    const isInputNan = Number.isNaN(Number(input))
    if (isInputNan) {
        setLogInputError("Log must be a number")
        return
    }
    if (Number(input) > 9999) {
        setLogInputError("Log must be below 10,000")
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