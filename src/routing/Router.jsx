import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Projects />} />
          <Route path="/tasks/:id" element={<Tasks />} />
        </Routes>
      </Router>
    </div>
  );
}
