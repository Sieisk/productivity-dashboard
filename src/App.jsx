import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Timer from "./pages/Timer";

function App() {
  return (
    <BrowserRouter>
      <nav style={{
        padding: 15,
        background: "#111",
        display: "flex",
        gap: "20px"
      }}>
        <Link style={{ color: "white" }} to="/">Dashboard</Link>
        <Link style={{ color: "white" }} to="/tasks">Tasks</Link>
        <Link style={{ color: "white" }} to="/timer">Timer</Link>
      </nav>

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;