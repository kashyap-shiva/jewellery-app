import React from 'react'
import { Route, Routes, BrowserRouter, Navigate, useLocation } from 'react-router-dom'
import { routers } from './routers'
import Layout from '../Layout'

const RoutesLayout = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routers.map(({ path, Component }) => (
                    <Route path="/" element={<Layout />}>
                        <Route path={path} element={Component}></Route>
                    </Route>
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesLayout