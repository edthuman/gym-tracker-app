import PageContext from "@/hooks/PageContext"
import { useContext } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

export default function WelcomePage() {
    const {setPage} = useContext(PageContext)

    return setPage ? (
        <View style={styles.page}>
            <View style={styles.headerBar}>
                <Text style={styles.headerText}>Welcome back!</Text>
            </View>
            <View style={styles.lastActiveArea}>
                <Text style={styles.lastActiveTitle}>Latest activity:</Text>
                <View style={styles.lastActiveBody}>
                    <Text style={styles.lastActiveText}>19th September:</Text>
                    <Text style={[styles.lastActiveText]}>50kg Leg Press</Text>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <Pressable style={styles.button} onPress={()=> setPage("CategoriesPage")}>
                    <Text style={styles.buttonText}>New Sesh</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={()=>console.log("View Stats")}>
                    <Text style={styles.buttonText}>View Stats</Text>
                </Pressable>
            </View>
        </View>
    ) : null
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "yellow",
        paddingVertical: "5%"
    },
    headerBar: {
        flex: 1,
        backgroundColor: "brown",
        justifyContent: "center",
        paddingHorizontal: "6%"
    },
    headerText: {
        textAlign: "center",
        fontSize: 36,
        color: "white",
        fontFamily: "Ubuntu_500Medium"
    },
    lastActiveArea: {
        flex: 2,
        justifyContent: "center",
        backgroundColor: "black",
        paddingVertical: "4%",
        paddingHorizontal: "4%"
    },
    lastActiveTitle: {
        color: "white",
        fontSize: 30,
        fontFamily: "Ubuntu_400Regular",
        paddingBottom: "3%"
    },
    lastActiveText: {
        marginLeft: "5%",
        color: "white",
        fontSize: 19
    },
    lastActiveBody: {
        justifyContent: "space-between"
    },
    buttonArea: {
        flex: 3,
        backgroundColor: "purple",
        justifyContent: "space-around",
        paddingVertical: "2%", 
        paddingHorizontal: "6%"
    },
    button: {
        backgroundColor: "grey",
        paddingVertical: 30,
        fontFamily: "Ubuntu_400Regular",
        borderRadius: 9,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 30,
        color: "white"
    }
})