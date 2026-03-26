import { motion } from "framer-motion";
import { education } from "../constants";
import { GraduationCap } from "lucide-react";
export default function Experience() {
  return <section id="experience" className="py-20 relative"><div className="max-w-4xl mx-auto px-6"><h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Experience & <span className="text-lavender">Education</span></h2><div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-lavender/20 before:to-transparent">{education.map((item, index) => <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
  >{
    /* Icon */
  }<div className="flex items-center justify-center w-10 h-10 rounded-full border border-lavender/20 bg-navy shadow-[0_0_10px_rgba(199,185,255,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"><GraduationCap size={20} className="text-lavender" /></div>{
    /* Content Card */
  }<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-navy/50 p-6 rounded-xl border border-white/5 shadow-sm hover:border-lavender/30 transition-colors"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-white text-lg">{item.degree}</h3><span className="text-xs font-mono text-lavender/80 bg-lavender/10 px-2 py-1 rounded">{item.year}</span></div><div className="text-lavender font-medium mb-2">{item.school}</div><p className="text-gray-400 text-sm">
                    Score: <span className="text-white">{item.score}</span></p></div></motion.div>)}{
    /* Add more experience items if available in the future */
  }</div></div></section>;
}
