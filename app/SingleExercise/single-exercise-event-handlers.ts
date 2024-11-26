export function handleLogInput(input: string, setFormData: React.Dispatch<React.SetStateAction<any>>) {
    const isInputNan = Number.isNaN(Number(input))
    if (isInputNan) {
        return
    }
    setFormData(currentData => {
        return {
            ...currentData,
            log: input === "" ? "0" : input
        }
    })
}