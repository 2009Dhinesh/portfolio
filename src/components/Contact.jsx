import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import { Send, Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Service ID, Template ID, and Public Key provided by user
    const serviceId = 'service_wwx3qaa';
    const templateId = 'template_nqiwpno';
    const publicKey = 'W71guSZ3JFT-d8jzQ';
    
    emailjs.send(
      serviceId, 
      templateId, 
      {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message
      },
      publicKey
    )
    .then(() => {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
           <h2 className="text-4xl font-bold mb-6">Let's <span className="text-lavender">Connect</span></h2>
           <p className="text-gray-400 mb-12 text-lg">
             Have a project in mind or want to discuss the latest tech? 
             Feel free to reach out. I'm always open to new opportunities.
           </p>

           <div className="space-y-8">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-lavender/10 rounded-lg text-lavender">
                    <Phone size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">{personalInfo.phone}</p>
                 </div>
              </div>
              
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-lavender/10 rounded-lg text-lavender">
                    <Mail size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-white mb-1">Email</h4>
                    <p className="text-gray-400">{personalInfo.email}</p>
                 </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="p-3 bg-lavender/10 rounded-lg text-lavender">
                    <MapPin size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-white mb-1">Location</h4>
                    <p className="text-gray-400">{personalInfo.address}</p>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Form */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy/50 p-8 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-sm"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Name</label>
                        <input 
                          required
                          type="text" 
                          name="name"
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                          className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lavender transition-colors"
                          placeholder="John Doe" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Email</label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                          className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lavender transition-colors"
                          placeholder="john@example.com" 
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Subject</label>
                    <input 
                      required
                      type="text" 
                      name="subject"
                      value={formState.subject}
                      onChange={e => setFormState({...formState, subject: e.target.value})}
                      className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lavender transition-colors"
                      placeholder="Project Inquiry" 
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea 
                      required
                      rows={4}
                      name="message"
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lavender transition-colors"
                      placeholder="Tell me about your project..." 
                    />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-gradient-to-r from-lavender to-indigo-500 rounded-lg text-navy font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                </button>
                {status === "success" && <p className="text-green-400 text-center text-sm">Message sent successfully!</p>}
                {status === "error" && <p className="text-red-400 text-center text-sm">Waiting for EmailJS setup...</p>}
            </form>
        </motion.div>
      </div>
    </section>
  );
}
