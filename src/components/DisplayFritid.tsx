'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { li } from 'framer-motion/client';

/* eslint-disable react/no-unescaped-entities */

const activities = [
  {
    id: 1,
    title: "Frigg 4",
    description: "Jeg har spilt fotball så lenge jeg kan huske. Barndomsklubben min er Frigg, hvor jeg også var trener for gutter født i 2005. Da jeg forstå at jeg ikke var egnet for å bli proff fotballspiller, valgte jeg å samle sammen kompiser og tidligere lagkamerater for å starte vårt eget fotballlag. I august 2024 ble Frigg 4 stiftet og i år (2025) skal vi delta i 10 divisjon i Oslo, med mål om å rykke opp. Jeg er lagleder, trener og spiller for laget.",
    image: "/images/frigg4.png",
    image2: "/images/FriggTreningBilde.jpg",
    link: "https://www.fotball.no/fotballdata/lag/hjem/?fiksId=32382",
  },
  {
    id: 2,
    title: "Sjakk",
    description: "Da jeg gikk på barneskolen deltok jeg aktivt i sjakkturneringer på landsdekkende nivå. Jeg har deltatt i Oslomesterskap og Norgesmesterskap (både lagsjakk og enkeltspiller). Jeg spilte aktivt i klubben Lindern sjakklubb. For tiden spiller jeg kun på chess.com og har en rating på rundt 1900-2000. Dette setter meg i topp 0.7% av alle spillerne på chess.com.",
    image: "/images/sjakk.jpg",
    image2: "/images/ChessRating.png",
    link:"https://www.chess.com/member/eops/stats/bullet",
  },
  {
    id: 3,
    title: "CS2",
    description: "Jeg begynte med Counter Strike på ungdomsskolen (ca 10 år siden) og har rundt 3000 timer i spillet. Sommeren 2024 bestemte jeg meg for å prøve å nå så høyt som mulig på Faciet. Faciet er en tredjeparts plattform som tilbyr høyere konkurranse og nivå innen CS (Counter Strike). Jeg nådde det høyeste nivået (Faceit lv 10) i løpet av 2 måneder. Det høyeste nivået har en minumumskrav på 2000 rating. Jeg fortsatte å spille og har nå en rating på rundt 2600-2700, noe som plasserte med i topp 400 spillere i Norge. (På mitt høyeste var jeg topp 250 i Norge). Dette gjorde at jeg ble med på et lag som deltok i spillserien ESEA Open 10. Laget hadde flere treninger i uken for å gjøre oss rustet for serien. Serien ble spilt samtidig som jeg skrev masteroppgave i 2024. ",
    image: "/images/cs2.jpg",
    image2: "/images/FaceitRating.png",
    link: "https://www.faceit.com/en/players/eops",
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
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover "
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
              <Image
                src={activities[selectedActivity - 1].image2}
                alt={activities[selectedActivity - 1].title}
                width={1000}
                height={600}
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <p>{activities[selectedActivity - 1].description}</p>
              {/* Button for redirecting to link */}
              <a href={activities[selectedActivity - 1].link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline"><p>Trykk her for mer informasjon</p></a>
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
            className="flex flex-row justify-center gap-10 mx-auto md:flex-columns md:flex-wrap"
          >
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                onClick={() => handleActivityClick(activity.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-48 h-48 rounded-full border-4 border-gray-300 hover:border-gray-500 cursor-pointer overflow-hidden shadow-md"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={256}
                  height={256}
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
