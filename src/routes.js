import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/" exact element={<Dashboard />} />
            </Routes>
        </>
    )
}

export default RouteApp