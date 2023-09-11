import Navbar from "../src/LandingPage/Navbar/Navbar";
import Hero from "../src/LandingPage/Hero/Hero.jsx";
import About from "../src/LandingPage/About/About";
import Footer from "../src/LandingPage/Footer/Footer";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePassword from "./LoginForm/CreatePassword";
import ForgotPassword from "./LoginForm/ForgotPassword";
import OTPAuthentication from "./LoginForm/OTPAuthentication";
import SignInForm from "./LoginForm/SignInForm";
import TempLogin from "./LoginForm/tempLogin";
import LandingPage from "./LandingPage/LandingPage";

export default function App() {
  return (
    <>
      {/* <div className="landingPage">
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </div> */}

      {/* <TempLogin /> */}
      {/* <div className="dashboard">
        <Dashboard />
      </div> */}

      {/* <div className="Login-Form">
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-auth" element={<OTPAuthentication />} />
          <Route path="/create-pass" element={<CreatePassword />} />
          <Route path="/" element={<SignInForm />} />
        </Routes>
      </div> */}

      {/* <LandingPage/> */}
    </>
  );
}
