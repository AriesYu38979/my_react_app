import React from "react";
import { Link, useLocation, Outlet, Routes, Route } from "react-router-dom";
import StartRating  from "./components/StarRating"

const StateManagement = () => (
    <>
    <h1>State Management</h1>
    <Link to="/" style={ {float : "right"}}>Home</Link>
    <div>
    <Link to="StartRating">Start Rating</Link>
    </div>
    <Routes>
        <Route path="StartRating/*" element = { <StartRating></StartRating>}></Route>
    </Routes>
    </>
)

export default StateManagement