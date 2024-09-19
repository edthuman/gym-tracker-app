export type ModalVisible = false | "Sign Up" | "Log In"

export type CurrentPage = "Home" | "WelcomePage"

type SetCurrentPage = React.Dispatch<React.SetStateAction<CurrentPage>>

export interface HomeProps {
    setCurrentPage: SetCurrentPage
}

export interface HomeButtonsProps {
    setModalVisible: React.Dispatch<React.SetStateAction<ModalVisible>> 
}

interface HomeButtonStyle {
    backgroundColor?: string,
    borderColor?: string,
    borderStyle?: "solid" | "dotted" | "dashed" | undefined,
    borderWidth?: number
}

export interface HomeButtonProps {
    text: "Sign Up" | "Log In",
    setModalVisible: React.Dispatch<React.SetStateAction<ModalVisible>>,
    style: HomeButtonStyle
}