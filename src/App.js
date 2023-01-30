import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Navbar from "./template/Navbar/Navbar";
import Footer from "./template/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AllTools from "./pages/Tools/AllTools";
import ToolPage from "./pages/Tools/ToolPage";
import Register from "./pages/Auth/Register";
import ScrollToTop from "./template/ScrollToTop";
import Questionnaire from "./pages/Forms/Questionnaire";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<AllTools />} />
        <Route path="/tools/:id" element={<ToolPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
