import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/LoginForm";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import { authService } from "./services/AuthService";
import Dashboard from "./pages/Dashboard";


function App() {
  const [user, setUser] = useState(authService.getUser());
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (email,password) => {

    const user = authService.login(email,password)

    if(user) {
      setUser(user)
      return user;
    } else {
      setErrorMessage("Error login in the user")
      return null;
    }
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
  }

  return (
    <Router>
      <Navbar onLogout={handleLogout}/>
      <Routes>
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} errorMessage={errorMessage} />}
        />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/"
          element={
            user ? (
              <HomePage />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard user={user} />
            ) : (
              // <Navigate to="/login" />
              <Navigate to="/"/>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
