import "./App.css";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchPage from "./components/SerachPage";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (!storedEmail && !storedPassword) {
      navigate("/login");
    }

    window.addEventListener("beforeunload", () => {
      localStorage.clear();
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
