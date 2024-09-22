import React, { useContext } from "react";
import WelcomePage from "./WelcomePage";
import PageContext from "@/hooks/PageContext";
import CategoriesPage from "./Categories/CategoriesPage";
import HomePage from "./Home/HomePage";
import ExercisesPage from "./Exercises/ExercisesPage";
import { Category } from "@/types";

export default function Navigator() {
    const components = {
        HomePage: HomePage,
        WelcomePage: WelcomePage,
        CategoriesPage: CategoriesPage,
        Weights: ExercisesPage,
        Cardio: ExercisesPage,
        Stretching: ExercisesPage
    };

    const { page } = useContext(PageContext);

    const CurrentPage = components[page];
    
    interface Props {
        category?: Category
    }

    const props: Props = {}
    if (page === "Weights" || page === "Cardio" || page === "Stretching") {
        // .includes method on an array of possible Category strings causes error querying with Page type
        props.category = page
    }

    return <CurrentPage {...props}/>;
}