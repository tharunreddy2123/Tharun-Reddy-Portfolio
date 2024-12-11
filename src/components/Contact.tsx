import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contact Me"
          subtitle="Get in touch for opportunities or collaborations"
        />

        <div className="max-w-5xl mx-auto grid place-items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[{
              icon: Mail,
              title: 'Email',
              content: 'tharunreddy802@gmail.com',
              href: 'mailto:contact@example.com',
            },
            {
              icon: Phone,
              title: 'Phone',
              content: '+91 7993003829',
              href: 'tel:+15551234567',
            },
            {
              icon: MapPin,
              title: 'Andhra Pradesh',
              content: 'Kadapa, Mydukur (516172)',
              href: '#',
            }].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
