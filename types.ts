export type ModalVisible = false | "Sign Up" | "Log In"

export type CurrentPage = "Home" | "WelcomePage"

export type SetCurrentPage = React.Dispatch<React.SetStateAction<CurrentPage>>

export type HomeProps = {
    setCurrentPage: SetCurrentPage
}

export type User = {
    username: string,
    _id: string
}

export type SetUser = React.Dispatch<React.SetStateAction<User>>

export type HomeButtonsProps = {
    setModalVisible: React.Dispatch<React.SetStateAction<ModalVisible>> 
}

type HomeButtonStyle = {
    backgroundColor?: string,
    borderColor?: string,
    borderStyle?: "solid" | "dotted" | "dashed" | undefined,
    borderWidth?: number
}

export type HomeButtonProps = {
    text: "Sign Up" | "Log In",
    setModalVisible: React.Dispatch<React.SetStateAction<ModalVisible>>,
    style: HomeButtonStyle
}