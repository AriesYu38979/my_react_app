import React from "react";
import { Link, useLocation, Outlet, Routes, Route } from "react-router-dom";
import  UseState  from "./components/UseState"

const StateManagement = () => (
    <>
    <h1>State Management</h1>
    <Link to="/">Home</Link>
    <div>
    <Link to="useState">Use State</Link>
    </div>
    <Routes>
        <Route path="useState" element = { <UseState></UseState>}></Route>
    </Routes>
    </>
)

export default StateManagement