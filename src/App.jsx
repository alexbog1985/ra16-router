import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "./components/Menu/Menu.jsx";
import HomePage from "./pages/Home.jsx";
import DriftPage from "./pages/Drift.jsx";
import ForzaPage from "./pages/Forza.jsx";
import TimeAttackPage from "./pages/TimeAttack.jsx";


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}