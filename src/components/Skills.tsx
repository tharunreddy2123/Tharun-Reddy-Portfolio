import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionTitle from './SectionTitle';

type IconName = keyof typeof LucideIcons;

interface Skill {
  name: string;
  icon: IconName;
  note?: string;
}

const skillsData = {
  'Programming Languages': [
    { name: 'C++', icon: 'Code2' },
    { name: 'Java', icon: 'Coffee' },
    { name: 'Python', icon: 'Rocket', note: 'Basics' }
  ],
  'Scripting Languages': [
    { name: 'HTML', icon: 'FileCode' },
    { name: 'CSS', icon: 'Palette' },
    { name: 'JavaScript', icon: 'Code' } // Added JavaScript here
  ],
  'Database Management': [
    { name: 'SQL', icon: 'Database' },
    { name: 'MySQL', icon: 'Server' }
  ],
  'Tools': [
    { name: 'VSCode', icon: 'Code' },
    { name: 'Google Colab', icon: 'Cloud' },
    { name: 'Jupyter NB', icon: 'BookOpen' }
  ]
} as const;


const SkillCard = ({ name, icon, note }: Skill) => {
  const Icon = LucideIcons[icon];

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: { 
      rotate: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: { 
      rotate: 360,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-4">
        <motion.div
          variants={iconVariants}
          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
        >
          {Icon && <Icon className="w-6 h-6 text-primary" />}
        </motion.div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          {note && <span className="text-sm text-gray-500">({note})</span>}
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, index }: { title: string; skills: Skill[]; index: number }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-6 text-dark border-b pb-2">{title}</h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-4"
      >
        {skills.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Technical Skills"
          subtitle="My expertise across different technologies and tools"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {Object.entries(skillsData).map(([category, skills], index) => (
            <SkillCategory
              key={category}
              title={category}
              skills={skills}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}