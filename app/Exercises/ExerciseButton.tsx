import PageContext from "@/hooks/PageContext";
import { Exercise } from "@/types";
import { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ExerciseButton({exercise, icons }: {exercise: Exercise, icons: any}) {
    const {setPage} = useContext(PageContext)
    const isIconFileValid = Object.keys(icons).includes(exercise.icon)

    let icon
    if (isIconFileValid) {
        icon = icons[exercise.icon]
    } else {
        icon = icons.default
    }
    
    return setPage ? (
        <Pressable style={styles.button} onPress={()=>setPage(exercise.name)}>
            <View style={styles.view}>
                <Text style={styles.name}>
                    {exercise.name}
                </Text>
                <Image source={icon} style={styles.icon}/>
            </View>
        </Pressable>
    ) : null
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "magenta",
        width: "100%",
        height: 90,
        marginBottom: "3.5%"
    },
    view: {
        paddingVertical: "3%",
        height: "100%",
        backgroundColor: "grey",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: "20%"
    },
    icon: {
        height: 55,
        width: 60,
        resizeMode: "contain"
    },
    name: {
        fontSize: 23,
        textAlign: "center",
        marginRight: 75,
        width: "80%"
    }
})