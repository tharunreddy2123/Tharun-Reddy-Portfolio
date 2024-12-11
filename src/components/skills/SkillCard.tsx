import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface SkillProps {
  name: string;
  icon: keyof typeof LucideIcons;
  note?: string;
}

export default function SkillCard({ name, icon, note }: SkillProps) {
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
}