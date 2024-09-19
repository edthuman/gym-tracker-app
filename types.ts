export type ModalVisible = false | "sign up" | "log in"

export interface HomeButtonsProps {
    setModalVisible: React.Dispatch<React.SetStateAction<ModalVisible>> 
}