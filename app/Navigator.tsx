import React, { useContext } from "react";
import WelcomePage from "./WelcomePage";
import Home from "./Home";
import PageContext from "@/hooks/PageContext";

export default function Navigator() {
    const components = {
        "Home": Home,
        "WelcomePage": WelcomePage
    }
    
    const {page} = useContext(PageContext)

    const CurrentPage = components[page]

    return <CurrentPage/>
}