import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Home/Dashboard";
import Interview_Prep from "./pages/interview_Prep/interview_Prep";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview-prep/:sessionId" element={<Interview_Prep />} />
        </Routes>
      </Router>

      <Toaster 
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            fontsize: "16px",
          },
        }}
      />
    </div>
  );
}

export default App;