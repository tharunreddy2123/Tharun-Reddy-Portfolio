import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';  // Import WhatsApp icon


export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-dark mb-6"
            >
              Tharun Reddy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 mb-8 max-w-lg"
            >
              I build exceptional digital experiences that combine beautiful design with powerful functionality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              {[
                { Icon: Github, href: 'https://github.com/tharunreddy2123' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/tharun-reddy-525a74258/' },
                { Icon: Instagram, href: 'https://www.instagram.com/tharun_reddy_23/' },
                { Icon: FaWhatsapp, href: 'https://wa.me/917993003829' }  // WhatsApp icon and link

              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 relative flex flex-col items-center"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-10 blur-3xl" />
              <img
                src="/images/photo.jpg"  // Corrected image path
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-8 border-white shadow-xl"
              />
            </div>
            <motion.a
              href="/TharunReddy.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
            >
              <FileDown className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}