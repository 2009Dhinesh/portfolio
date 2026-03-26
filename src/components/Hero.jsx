import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "../constants";
import Orb from "./Orb";
import RotatingText from "./RotatingText/RotatingText";
export default function Hero() {
  return <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">{
    /* Orb Background for Hero Only - Matches User Request */
  }<div className="absolute top-0 right-0 w-full md:w-1/2 h-[600px] z-0 overflow-hidden pointer-events-none md:pointer-events-auto"><Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  /></div><div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full"><motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  ><span className="inline-block py-1 px-3 rounded-full bg-lavender/10 text-lavender text-sm font-medium mb-6 border border-lavender/20">
            Available for Work
          </span><h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender to-indigo-400">{personalInfo.name}</span></h1><h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light flex items-center"><RotatingText
    texts={["Frontend", "Backend", "MERN Stack", "Full Stack"]}
    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg mr-2"
    staggerFrom="last"
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-120%" }}
    staggerDuration={0.025}
    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
    transition={{ type: "spring", damping: 30, stiffness: 400 }}
    rotationInterval={2e3}
  /><span>Developer</span><span className="ml-2">|</span><span className="ml-2">Designer</span></h2><p className="text-gray-400 mb-10 max-w-lg leading-relaxed text-lg">{personalInfo.tagline}</p><div className="flex flex-wrap gap-4"><a
    href="#projects"
    className="flex items-center gap-2 px-8 py-3 bg-lavender text-navy font-semibold rounded-full hover:bg-white transition-all transform hover:scale-105"
  >
              View Works <ArrowRight size={20} /></a><a
    href="/resume.jpg"
    download="Parth_Resume.jpg"
    className="flex items-center gap-2 px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all"
  >
              Download CV <Download size={20} /></a></div><div className="mt-16 flex items-center gap-6"><div className="flex -space-x-4">{[1, 2, 3].map((i) => <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-navy flex items-center justify-center text-xs">
                        user
                    </div>)}</div><p className="text-sm text-gray-400">Trusted by satisfied clients.</p></div></motion.div>{
    /* Right side is largely taken by 3D element, but we can add stats or decorations here if needed */
  }<div className="hidden md:block">{
    /* 3D Scene occupies this visually via absolute positioning in Hero3D, 
       but this div reserves space if we change Hero3D to relative. 
       Currently Hero3D is absolute. */
  }</div></div></section>;
}
