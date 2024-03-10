import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeNav from "./Components/HomeNav";
import HomePage from "./Components/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <HomeNav /> */}
      <HomePage />
    </div>
  );
}

export default App;
