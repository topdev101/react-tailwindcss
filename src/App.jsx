import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Task1Container from "./containers/FristTaskContainer";
import Task2Container from "./containers/SecondTaskContainer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/task1" element={<Task1Container />} />
            <Route path="/task2" element={<Task2Container />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
