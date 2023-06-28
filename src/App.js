import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";  // Penser à installer la bibliothèque framer-motion (npm i framer-motion)

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>  {/* Balise pour animations Framer Motion */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet-1" element={<Project1 />} />
          <Route path="/projet-2" element={<Project2 />} />
          <Route path="/projet-3" element={<Project3 />} />
          <Route path="/projet-4" element={<Project4 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>  {/* Balise pour animations Framer Motion */}
    </BrowserRouter>
  );
};

export default App;

