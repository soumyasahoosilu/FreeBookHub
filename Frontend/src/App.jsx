import React from "react";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import Contact from './components/Contact';
import AboutUs from "./components/AboutUs";
import  { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider"
import Signup from "./components/Signup";

import {Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);
  
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/signUp" element={<Signup/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>

        </Routes>
        <Toaster/>
      </div>
    </>
  );
};

export default App;
