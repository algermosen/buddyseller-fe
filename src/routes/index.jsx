import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "../layouts/AppLayout"
import Dashboard from "./Dashboard"
import PoS from "./PoS"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="sells" element={<PoS />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes