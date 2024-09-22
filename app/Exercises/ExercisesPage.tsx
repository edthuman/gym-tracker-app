import { Category } from "@/types";
import { Text } from "react-native";

export default function ExercisesPage({category}: {category?: Category}) {
    return <Text>
        {category} Exercises:
    </Text>
}