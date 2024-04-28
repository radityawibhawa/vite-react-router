import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./pages/pages";

function AppRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/vite-react-router/" element={<Pages />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;