import { StyleSheet, View } from "react-native";
import CategoryButton from "./CategoryButton";

export default function CategoriesPage() {
    return <View style={styles.page}>
        <CategoryButton category={"Weights"}/>
        <CategoryButton category={"Cardio"}/>
        <CategoryButton category={"Stretching"}/>
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