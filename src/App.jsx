import Home from "./pages/home/Home";
import './app.css'
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
