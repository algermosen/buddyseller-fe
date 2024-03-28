import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import AppLayout from "../layouts/AppLayout"
import Dashboard from "./Dashboard"
import PoS from "./PoS"

function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="sells" element={<PoS />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes