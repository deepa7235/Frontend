import React from "react";
import Home from "../screens/Home";
import Products from "../screens/Products";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "../screens/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}
