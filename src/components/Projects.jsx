import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../constants";
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    ref={ref}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
      transformStyle: "preserve-3d",
      transform
    }}
    className="relative h-96 w-full rounded-xl bg-navy/50 border border-white/10 p-6 flex flex-col justify-end overflow-hidden group hover:border-lavender/50 hover:shadow-2xl hover:shadow-lavender/10 transition-colors duration-300"
  ><div
    style={{
      transform: "translateZ(75px)",
      transformStyle: "preserve-3d"
    }}
    className="absolute inset-4 z-10 flex flex-col justify-end"
  ><div className="bg-navy/80 backdrop-blur-md p-4 rounded-lg border border-white/5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"><h3 className="text-xl font-bold text-white mb-2">{project.title}</h3><p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p><div className="flex flex-wrap gap-2 mb-4">{project.tags.map((tag) => <span key={tag} className="text-xs px-2 py-1 rounded bg-lavender/10 text-lavender border border-lavender/20">{tag}</span>)}</div><div className="flex gap-3"><a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="p-2 rounded-full bg-white/5 hover:bg-lavender hover:text-navy transition-colors"
  ><Github size={18} /></a><a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
    className="p-2 rounded-full bg-white/5 hover:bg-lavender hover:text-navy transition-colors"
  ><ExternalLink size={18} /></a></div></div></div>{
    /* Background Image / Gradient Placeholder */
  }<div
    style={{ transform: "translateZ(50px)" }}
    className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-90 z-0"
  />{
    /* Actual Image Background - Falling back to gradient if no image */
  }<div
    className="absolute inset-0 bg-cover bg-center z-[-1] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
    style={{
      backgroundImage: project.image ? `url(${project.image})` : void 0,
      backgroundColor: !project.image ? "#1e293b" : void 0
    }}
  >{!project.image && <div className="w-full h-full flex items-center justify-center text-white/5 text-9xl font-bold select-none">{project.title[0]}</div>}</div></motion.div>;
};
export default function Projects() {
  return <section id="projects" className="py-20"><div className="max-w-7xl mx-auto px-6"><h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="text-lavender">Projects</span></h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></div></section>;
}
