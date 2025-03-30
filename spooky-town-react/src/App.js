import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Costumes from "./pages/Costumes";
import AboutUs from "./pages/AboutUs";
import Jobs from "./pages/Jobs";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar.js";
import './styles.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/costumes" element={<Costumes/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Router>
    </BrowserRouter> 
  );
}

export default App;
