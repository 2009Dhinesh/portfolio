import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Resume() {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-navy flex flex-col items-center py-10 px-4 md:px-8"><div className="w-full max-w-4xl flex justify-between items-center mb-8"><button
    onClick={() => navigate("/")}
    className="flex items-center gap-2 px-4 py-2 text-lavender hover:bg-white/5 rounded-full transition-all"
  ><ArrowLeft size={20} />
                Back to Home
            </button><a
    href="/resume.jpg"
    download="Parth_Resume.jpg"
    className="flex items-center gap-2 px-6 py-2 bg-lavender text-navy font-semibold rounded-full hover:bg-white transition-all"
  >
                Download PDF <Download size={18} /></a></div><div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">{
    /* Assuming the file is named resume.jpg and placed in public/ */
  }<img
    src="/resume.jpg"
    alt="Resume"
    className="w-full h-auto object-contain"
  /></div></div>;
}
