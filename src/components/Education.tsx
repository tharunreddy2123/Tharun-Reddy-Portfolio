import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

const education = [
  {
    degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
    school: 'Annamacharya Institute of Technology & Sciences',
    year: '2022 - 2025',
    description: 'Specialized in Artificial Intelligence and Data Science',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Nuzvid Polytechnic',
    year: '2019 - 2022',
    description: ' Focuses on foundational concepts of computing, programming, networking, and software development.',
  },
  {
    degree: 'SSC',
    school: 'Vasavi High School',
    year: '2018 - 2019',
    description: 'Focus on SSC is the 10th-grade qualification under the state syllabus.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and qualifications"
        />

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4 mb-8"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-dark mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">{item.school}</p>
                  <p className="text-gray-500 text-sm mb-2">{item.year}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}