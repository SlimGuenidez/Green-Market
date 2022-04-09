import React from 'react';
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import Add from "./Add.jsx";
import Profil from "./Profil.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "./Layout.jsx";
const App = () => {
  
    return (
      
      <BrowserRouter>
        <Routes>
        
            <Route index element={<Login />} />
            <Route path='profil' element={<Profil />} />
            <Route path="add" element={<Add/>}/>
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<Signup />} />
          
          
        </Routes>
      </BrowserRouter>
    );
};

export default App;