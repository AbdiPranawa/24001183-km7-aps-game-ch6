import { useEffect, useState } from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import "./App.css";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import NavbarTailwind from "./components/navbar/NavbarTailwind";

function App() {
  return (
    <>
      <NavbarTailwind />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
