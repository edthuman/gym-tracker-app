import { StyleSheet, View } from "react-native";
import CategoryButton from "./CategoryButton";

export default function CategoriesPage() {
    return <View style={styles.page}>
        <CategoryButton text={"Weights"}/>
        <CategoryButton text={"Cardio"}/>
        <CategoryButton text={"Calisthenics"}/>
    </View>
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#4a5458",
        justifyContent: "space-around",
        paddingHorizontal: "5%"
    }
})