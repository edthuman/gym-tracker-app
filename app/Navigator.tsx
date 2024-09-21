import React, { useContext } from "react";
import WelcomePage from "./WelcomePage";
import Home from "./Home";
import PageContext from "@/hooks/PageContext";
import CategoriesPage from "./CategoriesPage";

export default function Navigator() {
    const components = {
        "Home": Home,
        "WelcomePage": WelcomePage,
        "CategoriesPage": CategoriesPage
    }
    
    const {page} = useContext(PageContext)

    const CurrentPage = components[page]

    return <CurrentPage/>
}