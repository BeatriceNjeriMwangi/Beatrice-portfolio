// import React from 'react';
// import logo from './logo.svg';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import { Link } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import About from './pages/about';
// import Contact from './pages/contact';
// import Projects from './pages/projects';
// import Resume from './pages/resume';
// import Services from './pages/services';
// import Skills from './pages/skills';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/skills">Skills</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/resume">Resume</Link></li>
//       </ul>
     
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';  // Import the Tailwind CSS file

import Home from './Components/home'; 
import About from './Components/about';
import Contact from './Components/contact';
import Projects from './Components/projects';
import Resume from './Components/resume';
import Services from './Components/services';
import Skills from './Components/skills';
import Navbar from './Components/Navbar';  

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
