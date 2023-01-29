import { Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/manage" element={<Home />} />
        <Route path="/browse" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
