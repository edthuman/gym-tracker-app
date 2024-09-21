import React, { useContext } from "react";
import WelcomePage from "./WelcomePage";
import PageContext from "@/hooks/PageContext";
import CategoriesPage from "./Categories/CategoriesPage";
import HomePage from "./Home/HomePage";

export default function Navigator() {
    const components = {
        HomePage: HomePage,
        WelcomePage: WelcomePage,
        CategoriesPage: CategoriesPage,
    };

    const { page } = useContext(PageContext);

    const CurrentPage = components[page];

    return <CurrentPage />;
}
