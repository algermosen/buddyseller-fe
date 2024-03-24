import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import PoS from "./PoS"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Dashboard}/>
                <Route path="/sells" Component={PoS}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes