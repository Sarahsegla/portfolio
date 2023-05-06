import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import Projects  from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div >
  <Navbar />
  <div className="App">
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


  </div>
        
       
      
    </div>
  );
}

export default App;
