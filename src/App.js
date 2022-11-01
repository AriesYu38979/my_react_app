import React from "react";
import { Routes, Route} from "react-router-dom"
import {
  Home,
  About,
  Events,
  Products,
  Contact
} from "./pages"
import StateManagement from "./ch_six/StateManagement";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/ch_six/*" element={<StateManagement/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>
  );
}

export default App;
