import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Hero />
          <Section
          title="Top Albums"
          apiEndpoint="https://qtify-backend.labs.crio.do/albums/top"
        />
          <Section
          title="New Albums"
          apiEndpoint="https://qtify-backend.labs.crio.do/albums/new"
        />
    </div>
    </BrowserRouter>
  );
}

export default App;
