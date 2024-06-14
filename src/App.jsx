import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Invitation from "./Invitation";
import Login from "./Login";
import "./App.css";

function App() {
  return (
    <Router>
      <Link to="/"></Link>
      <Link to="/invitation"></Link>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/invitation" element={<Invitation />} />
      </Routes>
    </Router>
  );
}

export default App;
