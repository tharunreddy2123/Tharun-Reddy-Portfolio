import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: 'College Web Site',
    description: 'Developed a basic college website featuring information on courses, events, and faculty using HTML, CSS, and JavaScript.',
    image: 'data:image/jpeg;base64,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',
    tags: ['Type Script', 'Java Script', 'CSS', 'HTML'],
    github: 'https://github.com/tharunreddy2123/aits-college-rajampetx',
    demo: 'https://aits-rajampet.netlify.app/',
  },
  /*{
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'AI Image Generator',
    description: 'Web application that generates images using AI models.',
    image: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=800&h=600&fit=crop',
    tags: ['Python', 'React', 'TensorFlow', 'AWS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'AI Image Generator',
    description: 'Web application that generates images using AI models.',
    image: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=800&h=600&fit=crop',
    tags: ['Python', 'React', 'TensorFlow', 'AWS'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },*/
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Projects"
          subtitle="Some of my recent work and personal projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-dark">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}