import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Tools from "./pages/Tools/Tools";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import Forms from "./pages/Forms/Forms";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/questionnaire" element={<Forms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
