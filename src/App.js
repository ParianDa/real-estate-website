import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";

const NAV_ELEMENTS = ["Home", "Listings", "Agents", "Contact"];
const user = {
  name: "John Doe",
  profilePicture:
    "https://thumbs.wbm.im/pw/small/6dc1cb1116b972bb2405441d4d590cd2.jpg",
};

function App() {
  function handleLogout() {
    console.log("User Logout");
  }

  return (
    <Router>
      <ul className="navbar">
        {NAV_ELEMENTS.map((ele, index) => (
          <Navbar key={index} val={ele} />
        ))}
      </ul>
      <Header user={user} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
