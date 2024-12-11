import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe2 } from 'lucide-react';
import SectionTitle from './SectionTitle';

const features = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with attention to detail.',
  },
  {
    icon: Globe2,
    title: 'Full Stack',
    description: 'Developing end-to-end solutions from database to front-end implementation.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer with a keen eye for design and a commitment to creating exceptional digital experiences."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 p-8 rounded-xl"
        >
          <p className="text-gray-600 leading-relaxed">
          As a fresher in web development, I am enthusiastic about creating modern and user-friendly applications. I bring a passion for learning, creative problem-solving, and a commitment to delivering quality solutions. I stay motivated to explore the latest technologies and best practices in the ever-evolving tech landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}