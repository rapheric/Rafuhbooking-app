import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home.jsx";
import Hotel from "./pages/hotel/hotel.jsx";
import List from "./pages/list/list.jsx";
import NoPage from "./pages/nopage/Nopage.jsx";
import Navbar from "./components/navbar/navbar.jsx";

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="Hotel" element={<Hotel />} />
        <Route path="List" element={<List />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
      
  );
}



export default App