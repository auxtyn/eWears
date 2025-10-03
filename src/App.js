import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import { Home, Contact } from "./pages";
import { Login, Register, Reset } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// components
import { Header, Footer } from "./components";
// import PaystackTest from "./components/PaystackTest";
import Donate from "./components/Donate";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <div className="text-center">
        
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
        {/* <PaystackTest/> */}
        <Donate />
      </div>
    </div>
  );
};

export default App;
