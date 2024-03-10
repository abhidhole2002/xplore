import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeNav from "./Components/HomeNav";
import HomePage from "./Components/HomePage";
import Tour from "./Components/Tour";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    

      <BrowserRouter>
        <HomeNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/places" element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
