import React, { useState } from "react";

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
      </BrowserRouter>
    </div>
  );
}

export default App;
