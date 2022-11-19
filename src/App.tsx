import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/landing/Landing";
import WebPortfolio from "./components/portfolio/WebPortfolio";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Landing {...{ navigate }} />} />
      <Route path="/portfolio" element={<WebPortfolio />} />
    </Routes>
  );
}

export default App;
