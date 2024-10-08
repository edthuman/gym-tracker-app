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
            <View style={styles.elements}>
                <Image source={icon} style={styles.icon}/>
                <Text style={styles.name}>
                    {exercise.name}
                </Text>
            </View>
        </Pressable> 
    ) : null
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "magenta",
        width: "100%",
        height: 250,
        paddingVertical: "2%"
    },
    elements: {
        marginVertical: "3%",
        paddingVertical: "3%",
        height: "100%",
        backgroundColor: "grey",
        justifyContent: "space-around",
        alignItems: "center"
    },
    icon: {
        height: "50%",
        width: "50%",
        resizeMode: "contain"
    },
    name: {
        fontSize: 23,
        backgroundColor: "white",
        textAlign: "center"
    }
})