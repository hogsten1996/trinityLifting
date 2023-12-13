import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs"; 
import ThreeDayProgramForm from './Components/ThreeDayProgramForm';
import MaxLiftCalculator from './Components/MaxLiftCalculator';
import AllArticles from './pages/AllArticles';
import ArticleById from "./pages/ArticleById";
import Footer from "./Components/Footer";

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
        <Route path="/allarticles" element={<AllArticles />} />
        <Route path="/article/:articleId" element={<ArticleById />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

