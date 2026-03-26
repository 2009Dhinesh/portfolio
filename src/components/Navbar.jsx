import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" }
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4"><div className="max-w-7xl mx-auto flex items-center justify-between p-4 rounded-2xl bg-navy/30 backdrop-blur-md border border-white/10 shadow-lg">{
    /* Logo */
  }<Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lavender to-white">
          DW
        </Link>{
    /* Desktop Menu */
  }<div className="hidden md:flex items-center gap-8">{navLinks.map((link) => <a
    key={link.name}
    href={link.href}
    className="text-sm font-medium text-gray-300 hover:text-lavender transition-colors"
  >{link.name}</a>)}</div>{
    /* Socials / Resume */
  }<div className="hidden md:flex items-center gap-4"><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lavender transition-colors"><Github size={20} /></a><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lavender transition-colors"><Linkedin size={20} /></a><Link to="/resume" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-navy bg-lavender rounded-full hover:bg-white transition-colors"><FileText size={16} /> Resume
          </Link></div>{
    /* Mobile Toggle */
  }<button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">{isOpen ? <X /> : <Menu />}</button></div>{
    /* Mobile Menu */
  }<AnimatePresence>{isOpen && <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="absolute top-24 left-6 right-6 p-6 rounded-2xl bg-navy/90 backdrop-blur-xl border border-white/10 md:hidden flex flex-col gap-4 shadow-2xl"
  >{navLinks.map((link) => <a
    key={link.name}
    href={link.href}
    onClick={() => setIsOpen(false)}
    className="text-lg font-medium text-gray-200 hover:text-lavender"
  >{link.name}</a>)}<div className="flex gap-4 mt-4 pt-4 border-t border-white/10"><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lavender"><Github /></a><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lavender"><Linkedin /></a><a href="mailto:example@example.com" className="text-gray-400 hover:text-lavender"><Mail /></a></div></motion.div>}</AnimatePresence></nav>;
}
