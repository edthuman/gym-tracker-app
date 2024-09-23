import PageContext from "@/hooks/PageContext";
import { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function CategoryButton({category}: {category: string}) {
    const {setPage} = useContext(PageContext)

    return setPage? (
        <Pressable style={styles.button} onPress={() => setPage(category)}>
            <Text style={styles.text}>
                {`${category}`}
            </Text>
        </Pressable>
    ) : null
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#8c9598",
        padding: 50,
        borderRadius: 9
   },
   text: {
        color: "cyan",
        fontSize: 30,
        fontFamily: "Ubuntu_500Medium",
        textAlign: "center"
   }
})