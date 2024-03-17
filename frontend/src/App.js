import React from 'react';
// import the routes and route components from react-router 
import {
  Routes,Route
} from "react-router-dom";
// import the page components
import Home from './markup/pages/Home';
import About from './markup/pages/About';
import Contact from './markup/pages/Contact';
import Login from './markup/pages/Login';
import AddEmployee from './markup/pages/admin/AddEmployee';
// Import the css files 
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";
// import custom css
import "./assets/styles/custom.css";
// Import the Header component 
import Header from './markup/components/Header/Header';
// Import the Footer component
import Footer from './markup/components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin/add-employee" element={<AddEmployee />} />
   </Routes>
<Footer/>
</>
  );
}

export default App;
