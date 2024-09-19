import React, { useState } from "react";
import WelcomePage from "./WelcomePage";
import { CurrentPage } from "@/types";
import Home from "./Home";

export default function Navigator() {
    const [currentPage, setCurrentPage] = useState<CurrentPage>("Home")
    const components = {
        "Home": Home,
        "WelcomePage": WelcomePage
    }
    
    const CurrentPage = components[currentPage]

    return <CurrentPage setCurrentPage={setCurrentPage}/>
}