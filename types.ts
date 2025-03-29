export type SetPage = React.Dispatch<React.SetStateAction<string>>

export type User = {
    username: string,
    _id: string
}

export type SetUser = React.Dispatch<React.SetStateAction<User>>

type HomeButtonStyle = {
    backgroundColor?: string,
    borderColor?: string,
    borderStyle?: "solid" | "dotted" | "dashed" | undefined,
    borderWidth?: number
}

export type HomeButtonProps = {
    text: "Sign Up" | "Log In",
    style: HomeButtonStyle
}

export interface Exercise {
    _id: string,
    name: string,
    description: string,
    icon: string
}

export interface ExerciseWithCategory extends Exercise {
    category: string
}

interface Log {
    date: string
    log: number
}

export interface Diary {
    _id: string
    exercise: string
    username: string
    log: Log[]
    personalBest?: number
    goal?: number
}

export interface LogFormData {
    date: Date,
    log: string
}

export type BooleanStateSetter = React.Dispatch<React.SetStateAction<boolean>>