import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Menu from './pages/Menu'


export default function MainRouter() {

    return(
        <Router>
            <Routes>
                <Route path = '/' element={<Menu />} />
                <Route path = '/dashboard' element={<Dashboard />} />
            </Routes>
        </Router>
    )
}