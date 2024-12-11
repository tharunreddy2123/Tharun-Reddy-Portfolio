import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
  note?: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  index: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function SkillCategory({ title, skills, index }: SkillCategoryProps) {
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
}