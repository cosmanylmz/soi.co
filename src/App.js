import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Main from "./components/Main"; // Main might be used inside Homepage or Menu, or removed if not needed

import data from "./data/menuData.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";

function App() {
  const [language, setLanguage] = useState("TR");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Navbar language={language} setLanguage={setLanguage} /> {/* Example usage */}
        <Routes>
          <Route
            index
            element={<Homepage language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="menu"
            element={
              <Menu
                language={language}
                setLanguage={setLanguage}
                data={data}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
        </Routes>
        <Footer /> {/* Example usage */}
      </BrowserRouter>
    </div>
  );
}

export default App;
