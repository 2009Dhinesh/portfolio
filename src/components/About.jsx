import { motion } from "framer-motion";
export default function About() {
  return <section id="about" className="py-20 relative"><div className="max-w-7xl mx-auto px-6"><motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="grid md:grid-cols-2 gap-16 items-center"
  >{
    /* Left Column: Image/Visual */
  }<div className="relative"><div className="aspect-square rounded-2xl overflow-hidden bg-navy/50 border border-white/10 relative group">{
    /* Abstract shape or Profile placeholder */
  }<div className="absolute inset-0 bg-gradient-to-br from-lavender/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" /><div className="absolute inset-4 border border-white/20 rounded-xl flex items-center justify-center"><span className="text-6xl text-white/10 font-bold">DW</span></div></div>{
    /* Decorative elements */
  }<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lavender/20 blur-3xl rounded-full" /></div>{
    /* Right Column: Bio */
  }<div className="relative z-10 p-8 rounded-3xl bg-navy/40 backdrop-blur-md border border-white/5 shadow-xl"><h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
                About <span className="text-lavender">Me</span></h2><div className="space-y-6 text-gray-300 leading-relaxed"><p>
                  I am a self-motivated and highly passionate Computer Science graduate with a focus on web development. 
                  My journey began with a curiosity for how things work on the internet, which led me to pursue a 
                  Master's in Computer Applications.
                </p><p>
                  I specialize in crafting high-end, user-centric web interfaces using modern technologies like React, 
                  Tailwind CSS, and Framer Motion. I believe in the power of clean code and pixel-perfect design to 
                  create immersive digital experiences.
                </p><p>
                  Currently, I am seeking an opportunity to contribute to a challenging organization's growth while 
                  enhancing my skills day by day.
                </p></div><div className="mt-10 grid grid-cols-2 gap-6"><div><h4 className="text-4xl font-bold text-lavender">10+</h4><p className="text-sm text-gray-400 mt-1">Projects Completed</p></div><div><h4 className="text-4xl font-bold text-lavender">0-1</h4><p className="text-sm text-gray-400 mt-1">Years Experience</p></div></div></div></motion.div></div></section>;
}
