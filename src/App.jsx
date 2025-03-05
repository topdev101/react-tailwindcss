import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SecondContainer from "./containers/SecondTaskContainer";
import FirstContainer from "./containers/FirstTaskContainer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/task1" element={<FirstContainer />} />
            <Route path="/task2" element={<SecondContainer />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
