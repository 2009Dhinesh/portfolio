import { personalInfo } from "../constants";
export default function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return <footer className="py-8 border-t border-white/10 bg-navy/80 backdrop-blur-md"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"><p className="text-gray-400 text-sm">
             &copy; {currentYear} {personalInfo.name}. All rights reserved.
           </p><div className="flex items-center gap-6">{personalInfo.socials.map((social) => <a
    key={social.name}
    href={social.url}
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-lavender transition-colors"
    aria-label={social.name}
  ><social.icon size={20} /></a>)}</div></div></footer>;
}
