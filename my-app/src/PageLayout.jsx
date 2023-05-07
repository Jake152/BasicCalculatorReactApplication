import React from "react";
import AppHeader from "./Components/AppHeader/AppHeader";
import AppBody from "./Components/AppBody/AppBody";
import AppFooter from "./Components/AppFooter/AppFooter";

import './PageLayout.css';

export default function PageLayout() {
    return (
        <div id='page-layout-container'>
            <AppHeader />
            <AppBody />
            <AppFooter />
        </div>
    )
}