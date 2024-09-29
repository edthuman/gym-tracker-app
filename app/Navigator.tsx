import React, { useContext } from "react";
import WelcomePage from "./WelcomePage";
import PageContext from "@/hooks/PageContext";
import CategoriesPage from "./Categories/CategoriesPage";
import HomePage from "./Home/HomePage";
import ExercisesPage from "./Exercises/ExercisesPage";
import { Exercise, ExerciseWithCategory } from "@/types";
import SingleExercisePage from "./Exercise/SingleExercisePage";

export default function Navigator({exercises}: {exercises: ExerciseWithCategory[]}) {
    const categories: any = {}
    const exerciseNames: string[] = []
    const categoryComponents: any = {}
    const exerciseComponents: any = {}

    exercises.forEach(exercise => {
        const {_id, name, description, category, icon} = exercise
        const exerciseToAdd: Exercise = {_id, name, description, icon}

        if (!categories[category]) {
            categories[category] = [exerciseToAdd]
            categoryComponents[category] = ExercisesPage
        } else {
            categories[category].push(exerciseToAdd)
        }

        exerciseNames.push(exercise.name)
        exerciseComponents[exercise.name] = SingleExercisePage
    })

    const components = {
        HomePage: HomePage,
        WelcomePage: WelcomePage,
        CategoriesPage: CategoriesPage,
        ...categoryComponents,
        ...exerciseComponents
    };

    const { page } = useContext(PageContext);

    const CurrentPage = components[page];
    
    interface Props {
        categories?: any[]
        category?: any,
        exercise?: ExerciseWithCategory
    }

    const props: Props = {}
    if (page === "CategoriesPage") {
        props.categories = categories
    }
    if (Object.keys(categories).includes(page)) {
        props.category = {}
        props.category[page] = categories[page]
    }
    if (exerciseNames.includes(page)) {
        props.exercise = exercises.find(exercise => exercise.name === page)
    }

    return <CurrentPage {...props}/>;
}