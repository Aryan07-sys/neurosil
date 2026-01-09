import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to collaborate? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Contact Form */}
            <div className="bg-gray-900/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-2xl shadow-xl p-6 sm:p-8 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Send us a message
              </h2>

              {submitted ? (
                <div className="bg-green-100/50 dark:bg-green-900/30 backdrop-blur-sm border border-green-300 dark:border-green-700 rounded-xl p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700 dark:text-green-400">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100"
                      placeholder="John Doe "
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100"
                      placeholder="john12@mail.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-gray-900 dark:text-gray-100"
                      placeholder="Tell us about yourself or your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-6 sm:space-y-8">
              
              {/* Contact Information */}
              <div className="bg-gray-900/10 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-2xl shadow-xl p-6 sm:p-8 animate-fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-base sm:text-lg">
                        Email
                      </h3>
                      <a 
                        href="mailto:neurosil.ai.techno@gmail.com" 
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base break-all"
                      >
                        neurosil.ai.techno@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-base sm:text-lg">
                        Phone
                      </h3>
                      <a 
                        href="tel:+919313253641" 
                        className="text-blue-600 dark:text-blue-400 hover:underline block text-sm sm:text-base"
                      >
                        +91 93132-53641
                      </a>
                      <a 
                        href="tel:+919879345928" 
                        className="text-blue-600 dark:text-blue-400 hover:underline block text-sm sm:text-base"
                      >
                        +91 98793-45928
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 text-base sm:text-lg">
                        Location
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                        Drone lab, Guiitar Council<br />
                        GSFC University
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white animate-fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  Connect With Us
                </h2>
                <p className="mb-6 text-blue-100 text-sm sm:text-base">
                  Follow us on social media to stay updated with our latest projects and research
                </p>

                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:neurosil.ai.techno@gmail.com"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900  text-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center sm:text-left">
              © 2025 Neurosil Ai Techno. Established - Dec 2025.
            </p>
            <div className="flex space-x-4">

              <a
                href="mailto:neurosil.ai.techno@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
}