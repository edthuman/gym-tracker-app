import { Pressable, StyleSheet, Text, View } from "react-native";
import CategoryButton from "./CategoryButton";
import { useContext } from "react";
import PageContext from "@/hooks/PageContext";

export default function CategoriesPage() {
    const {setPage} = useContext(PageContext)

    return setPage ? (
        <View style={styles.page}>
            <Pressable onPress={() => setPage("WelcomePage")} style={styles.backButton}>
                <Text>
                    {"<--"} Go back
                </Text>
            </Pressable>
            <CategoryButton category={"Weights"}/>
            <CategoryButton category={"Cardio"}/>
            <CategoryButton category={"Stretching"}/>
        </View>
    ) : null
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#4a5458",
        justifyContent: "space-around",
        paddingHorizontal: "5%"
    },
    backButton: {
        backgroundColor: "white",
        marginVertical: "5%",
        paddingVertical: "5%",
        width: "30%",
        justifyContent: "center",
        alignItems: "center"
    }
})