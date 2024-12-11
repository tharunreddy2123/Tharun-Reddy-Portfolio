import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionTitle from './SectionTitle';

const experiences = [
  {
    role: 'Intern - Full Stack Java',
    company: 'Skill Dzire.',
    period: 'Mar,2024 - Apr,2024',
    description: 'Completed a Full Stack Java internship, gaining hands-on experience in development and integrating AI and data science concepts.',
    achievements: [
      'Gained hands-on experience in Full Stack Java development.',
      'Applied knowledge of Artificial Intelligence and Data Science to enhance project outcomes.',
      //'Led a team of 5 developers',
    ],
  },

  {
    role: 'Intern - Data Science',
    company: 'Indo-Euro Synchronization (IES) Pvt Ltd',
    period: 'April - October 2023',
    description: 'Completed a certification on emerging technologies focusing on Data Science.',
    achievements: [
      'Secured A grade in the internship',
      'Participated in sessions by industry and international experts',
      'Enhanced skills in data science and emerging technologies'
    ]
  },

  {
    role: 'Training',
    company: 'Microlink Information Technologie',
    period: 'Sep,2021 - Feb 2022',
    description: 'Trained in Computer Hardware Maintenance and Network Administration in the Customer Support Division.',
    achievements: [
      'Training in Computer Hardware Maintenance & Network Administration',
      'Good grasping and analyzing capabilities',
      'Good performance',
      //'Enhanced skills in data science and emerging technologies'
    ]
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and key achievements"
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <div className="ml-auto">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>
              <div className="ml-16">
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}