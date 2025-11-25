import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Bugs from "./pages/Bugs.js";
import Life from "./pages/Life.js";
import BugBountyLearning from "./pages/bug/learn.js";
import FoundBugs from "./pages/bug/bug.js";
import { initScrollReveal } from './scrollReveal';
import { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <>
      <Router basename="/blogs">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bugs" element={<Bugs />} />
          <Route path="/bugs/learn" element={<BugBountyLearning />} />
          <Route path="/bugs/found" element={<FoundBugs />} />
          <Route path="/life" element={<Life />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
