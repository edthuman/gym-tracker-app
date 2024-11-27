import { LogFormData } from "@/types"
import { DateTimePickerEvent } from "@react-native-community/datetimepicker"

type SetFormData = React.Dispatch<React.SetStateAction<LogFormData>>

export function handleLogInput(input: string, setFormData: SetFormData) {
    const isInputNan = Number.isNaN(Number(input))
    if (isInputNan) {
        return
    }
    if (Number(input) > 9999) {
        return "Log must be below 10,000"
    }
    setFormData(currentData => {
        return {
            ...currentData,
            log: input
        }
    })
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