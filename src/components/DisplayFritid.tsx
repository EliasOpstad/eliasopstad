'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const activities = [
  {
    id: 1,
    title: "Frigg 4",
    description: "Fotballtrener, lagleder og spiller for Frigg 4.",
    image: "/images/frigg4.png",
  },
  {
    id: 2,
    title: "Sjakk",
    description: "Tidligere aktiv sjakkspiller, deltatt i Oslomesterskap og Norgesmesterskap.",
    image: "/images/sjakk.jpg",
  },
  {
    id: 3,
    title: "CS2",
    description: "Faceit level 10 i CS2, med konkurransebasert erfaring.",
    image: "/images/cs2.jpg",
  },
];

export default function DisplayFritid() {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  const handleActivityClick = (id: number) => {
    setSelectedActivity(id === selectedActivity ? null : id);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
      <AnimatePresence mode="wait">
        {selectedActivity ? (
          <>
            {/* Venstre kolonne: Vertikal liste av sirkler */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-start space-y-4"
            >
              {activities.map((activity) => (
                <motion.div
                  key={activity.id}
                  onClick={() => handleActivityClick(activity.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-24 h-24 rounded-full border-4 cursor-pointer overflow-hidden shadow-md ${
                    selectedActivity === activity.id
                      ? 'border-blue-500'
                      : 'border-gray-300 hover:border-gray-500'
                  }`}
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Høyre kolonne: Valgt aktivitet */}
            <motion.div
              key={selectedActivity}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 border rounded-lg shadow-md bg-white w-full lg:w-2/3"
            >
              <h2 className="text-2xl font-bold mb-2">{activities[selectedActivity - 1].title}</h2>
              <img
                src={activities[selectedActivity - 1].image}
                alt={activities[selectedActivity - 1].title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p>{activities[selectedActivity - 1].description}</p>
            </motion.div>
          </>
        ) : (
          // Horisontal visning når ingen aktivitet er valgt
          <motion.div
            key="circles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row justify-center gap-6"
          >
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                onClick={() => handleActivityClick(activity.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-32 h-32 rounded-full border-4 border-gray-300 hover:border-gray-500 cursor-pointer overflow-hidden shadow-md"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
