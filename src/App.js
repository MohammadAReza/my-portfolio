
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Project from './Pages/Project/Project';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="project" element={<Project />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
