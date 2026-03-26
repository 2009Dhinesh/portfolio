import { ReactLenis } from "lenis/react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";
function App() {
  return <ReactLenis root><BrowserRouter><div className="min-h-screen font-sans text-white selection:bg-lavender/30"><Routes><Route path="/" element={<><Background /><Navbar /><main className="relative z-10 px-4 sm:px-8 md:px-16 container mx-auto"><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main><Footer /></>} /><Route path="/resume" element={<Resume />} /></Routes></div></BrowserRouter></ReactLenis>;
}
export default App;
