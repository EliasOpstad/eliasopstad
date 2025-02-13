'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* eslint-disable react/no-unescaped-entities */

const projects = [
  {
    id: 1,
    title: "Gustav's Vinbar & Tapas",
    description: "En eksklusiv vinbar med deilige tapasretter.",
    image: "/images/GustavsLargeLogo.png",
    stack: [
      "React (Typescript)",
      "CSS (Styled components)",
      "Node.js",
      "Routing: React Router",
      "Vercel", //Ikke ferdig
    ]
  },
  {
    id: 2,
    title: "Masteroppgave - UiO",
    description: "Hvordan introdusere DevOps til nye studenter?",
    image: "/images/Pipeline.png",
    stack: [
      "Astro JS",
      "Markdown",
      "CSS",
      "Datadog",
      "Vercel", //Ikke ferdig
    ]
  },
  {
    id: 3,
    title: "MexicanTrain.no",
    description: "En digital versjon av det populære domino-spillet.",
    image: "/images/MexicanTrain.png",
    stack: [
      "React (Typescript)",
      "Tailwind CSS",
      "Next.js",
      "Vercel",
    ]
  },
  {
    id: 4,
    title: "MoviePicker",
    description: "En app for å velge filmer sammen med venner.",
    image: "/images/Moviepicker.png",
    stack: [
      "Flutter (Dart)",
      "Firebase Advanced",
      "TMDB API",
    ]
  },
];

export default function DisplayProject() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (id: number) => {
    setSelectedProject(id === selectedProject ? null : id); // Toggle ved klikk
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <>
            {/* Venstre kolonne: Prosjektliste */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/3 space-y-4"
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className={`p-4 cursor-pointer border rounded-lg shadow-md ${
                    selectedProject === project.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                </div>
              ))}
            </motion.div>

            {/* Høyre kolonne: Valgt prosjekt */}
            <motion.div
              key={selectedProject}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-2/3"
            >
              <div className="p-4 border rounded-lg shadow-md bg-white">
                <h2 className="text-2xl font-bold mb-2">{projects[selectedProject - 1].title}</h2>
                <img
                  src={projects[selectedProject - 1].image}
                  alt={projects[selectedProject - 1].title}
                  className="w-full h-128 object-cover rounded-md mb-4"
                />
                <p>{projects[selectedProject - 1].description}</p>
                <h3 className="text-lg font-semibold mt-4">Teknologier:</h3>
                <ul>
                  {projects[selectedProject - 1].stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        ) : (
          // 2x2 grid når ingen prosjekt er valgt
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleProjectClick(project.id)}
                className="p-4 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
