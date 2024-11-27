import { LogFormData } from "@/types"
import { DateTimePickerEvent } from "@react-native-community/datetimepicker"

type SetFormData = React.Dispatch<React.SetStateAction<LogFormData>>

export function handleLogInput(input: string, setFormData: SetFormData): { error: string } {
    const isInputNan = Number.isNaN(Number(input))
    if (isInputNan) {
        return { error: "Log must be a number"}
    }
    if (Number(input) > 9999) {
        return { error: "Log must be below 10,000" }
    }
    setFormData(currentData => {
        return {
            ...currentData,
            log: input
        }
    })
    return { error: "" }
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