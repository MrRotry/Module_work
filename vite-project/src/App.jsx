import React from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header name="Roman" surname="Kuruța" />
      <Routes>
        <Route path="/" element={<Page1 city="s.Serednie" />} />
        <Route path="/page1" element={<Page1 city="s.Serednie" />} />
        <Route path="/page2" element={<Page2 hobby="читати та писати бек" />} />
      </Routes>
      <Footer group="ІСТ" />
    </>
  );
};

export default App;
