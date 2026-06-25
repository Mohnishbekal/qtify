import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Hero />
    </div>
    </BrowserRouter>
  );
}

export default App;
