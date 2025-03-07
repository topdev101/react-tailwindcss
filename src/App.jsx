import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SecondContainer from "./containers/SecondTaskContainer";
import FirstContainer from "./containers/FirstTaskContainer";
import Layout from "./components/layout/Layout";
import MyProvider from "./contexts/MyProvider";
import { MyContext } from "./contexts/MyContext";

function App() {
  return (
    <MyProvider>
      <Router>
        <div className="relative App">
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="absolute top-0 flex items-center justify-center w-screen h-screen bg-slate-300">
                    <div className="flex gap-3 text-5xl">
                      <Link to="/task1" className="underline">
                        First Task
                      </Link>
                      <span>/</span>
                      <Link to="/task2" className="underline ">
                        Second Task
                      </Link>
                    </div>
                  </div>
                }
              />
              <Route path="/task1" element={<FirstContainer />} />
              <Route path="/task2" element={<SecondContainer />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
