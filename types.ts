export type Page = "Home" | "WelcomePage" | "CategoriesPage"

export type SetPage = React.Dispatch<React.SetStateAction<Page>>

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