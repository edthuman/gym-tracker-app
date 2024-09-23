import React, { useContext } from "react";
import WelcomePage from "./WelcomePage";
import PageContext from "@/hooks/PageContext";
import CategoriesPage from "./Categories/CategoriesPage";
import HomePage from "./Home/HomePage";
import ExercisesPage from "./Exercises/ExercisesPage";
import { Exercise, ExerciseWithCategory } from "@/types";

export default function Navigator({exercises}: {exercises: ExerciseWithCategory[]}) {
    const categories: any = {}

    exercises.forEach(exercise => {
        const {_id, name, description, category, icon} = exercise
        const exerciseToAdd: Exercise = {_id, name, description, icon}

        if (!categories[category]) {
            categories[category] = [exerciseToAdd]
        } else {
            categories[category].push(exerciseToAdd)
        }
    })

    const categoryComponents: any = {}
    Object.keys(categories).forEach((category) => {
        categoryComponents[category] = ExercisesPage
    })

    const components = {
        HomePage: HomePage,
        WelcomePage: WelcomePage,
        CategoriesPage: CategoriesPage,
        ...categoryComponents
    };

    const { page } = useContext(PageContext);

    const CurrentPage = components[page];
    
    interface Props {
        categories?: any[]
        category?: any
    }

    const props: Props = {}
    if (page === "CategoriesPage") {
        props.categories = categories
    }
    if (Object.keys(categories).includes(page)) {
        props.category = {}
        props.category[page] = categories[page]
    }

    return <CurrentPage {...props}/>;
}