import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs"; 
import ThreeDayProgramForm from './Components/ThreeDayProgramForm';
import MaxLiftCalculator from './Components/MaxLiftCalculator';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/threedayprogramform" element={<ThreeDayProgramForm />} />
        <Route path="/maxliftcalc" element={<MaxLiftCalculator />} />
      </Routes>
    </div>
  );
};

export default App;

