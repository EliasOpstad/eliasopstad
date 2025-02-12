'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { title } from 'process';

const utdanning = [
    {
        id: 1,
        title: "(Master) - Informatikk: programmering og systemarkitektur",
        school: "Universitetet i Oslo",
        image: "/images/UiOLogo.png",
        description: "Mastergrad i Informatikk: programmering og systemarkitektur ved Universitetet i Oslo.",
        courses: [
            {
                id: 1,
                code: "IN5490",
                title: "Masteroppgave",
                description: "Masteroppgave i Informatikk ved Universitetet i Oslo.",
                link: "https://www.uio.no/studier/emner/matnat/ifi/IN5490/index.html",
            },
            {
                id: 2,
                code: "IN5410",
                title: "Energiinformatikk",
                description: "Energiinformatikk ved Universitetet i Oslo.",
                link: "https://www.uio.no/studier/emner/matnat/ifi/IN5410/index.html",
            },
            {
                id: 3,
                code: "IN5320",
                title: "Development in platform ecosystems",
                description: "Development in platform ecosystems ved Universitetet i Oslo.",
                link: "https://www.uio.no/studier/emner/matnat/ifi/IN5320/index.html",
            },
            {
                id: 4,
                code: "IN5020",
                title: "Distribuerte systemer",
                description: "Distribuerte systemer ved Universitetet i Oslo.",
                link: "https://www.uio.no/studier/emner/matnat/ifi/IN5020/index.html",
            },
            {
                id: 5,
                code: "IN4240",
                title: "Testing av programvare",
                description: "Testing av programvare ved Universitetet i Oslo.",
                link: "https://www.uio.no/studier/emner/matnat/ifi/IN4240/index.html",
            },
            {
                id: 6,
                code: "IN4110",
                title: "Problemløsning med høynivå-språk",
                description: "Problemløsning med høynivå-språk ved Universitetet i Oslo.",
                link: "https://www.uio.no/studier/emner/matnat/ifi/IN4110/index.html",
            },
            {
                id: 7,
                code: "IN4050",
                title: "Introduksjon til kunstig intelligens og maskinlæring",
                description: "Introduksjon til kunstig intelligens og maskinlæring ved Universitetet i Oslo.",
                link: "https://www.uio.no/studier/emner/matnat/ifi/IN4050/index.html",
            },
            {
                id: 8,
                code: "IN4020",
                title: "Databasesystemer",
                description: "Databasesystemer ved Universitetet i Oslo.",
                link: "https://www.uio.no/studier/emner/matnat/ifi/IN4020/index.html",
            },
            {
                id: 9,
                code: "IN4000",
                title: "Operativsystemer",
                description: "Operativsystemer ved Universitetet i Oslo.",
                link: "https://www.uio.no/studier/emner/matnat/ifi/IN4000/index.html",
            },



            // IN5930 Informatikk. Masteroppgave
            // IN5410 Energiinformatikk 
            // IN5320 Development in platform ecosystems 
            // IN5020 Distribuerte systemer 
            // IN4240 Testing av programvare
            // IN4110 Problemløsning med høynivå-språk
            // IN4050 Introduksjon til kunstig intelligens og maskinlæring
            // IN4020 Databasesystemer 
            // IN4000 Operativsystemer
        ]
    },
    {
        id: 2,
        title: "(Bachelor) - Informasjonsteknologi",
        school: "OsloMet",
        image: "/images/OsloMetLogo.png",
        description: "Bachelorgrad i Informasjonsteknologi ved OsloMet. ",
        courses: [ //Presented in order after course Code.
            {
                id: 1,
                code: "DATA3900-1",
                title: "Bacheloroppgave",
                description: "Bacheloroppgave i Informasjonsteknologi ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/DATA3900/1/2021",
            },
            {
                id: 2,
                code: "DATA3740-1",
                title: "IT-Innovasjons- og entreprenørskapsprosjekt",
                description: "IT-Innovasjons- og entreprenørskapsprosjekt ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/DATA3740/1/2021",
            },
            {
                id: 3,
                code: "DAVE3625-1",
                title: "Introduksjon til Kunstig Intelligens",
                description: "Introduksjon til Kunstig Intelligens ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/DAVE3625/1/2021",
            },
            {
                id: 4,
                code: "ADSE3200-1",
                title: "Visualisering",
                description: "Visualisering ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/ADSE3200/1/2021",
            },
            {
                id: 5,
                code: "ITPE3200-1",
                title: "Webapplikasjoner",
                description: "Webapplikasjoner ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/ITPE3200/1/2021",
            },
            {
                id: 6,
                code: "ITPE3100-1",
                title: "Datasikkerhet",
                description: "Datasikkerhet ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/ITPE3100/1/2021",
            },
            {
                id: 7,
                code: "DATA2500-1",
                title: "Operativsystemer",
                description: "Operativsystemer ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/DATA2500/1/2021",
            },
            {
                id: 8,
                code: "DATA2410-1",
                title: "Datanettverk og skytjenester",
                description: "Datanettverk og skytjenester ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/DATA2410/1/2021",
            },
            {
                id: 9,
                code: "DATS2300-1",
                title: "Algoritmer og datastrukturer",
                description: "Algoritmer og datastrukturer ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/DATS2300/1/2021",
            },
            {
                id: 10,
                code: "DAFE2200-1",
                title: "Systemutvikling",
                description: "Systemutvikling ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/DAFE2200/1/2021",
            },
            {
                id: 11,
                code: "ADSE2100-1",
                title: "Menneske maskin interaksjon",
                description: "Menneske maskin interaksjon ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/ADSE2100/1/2021",
            },
            {
                id: 12,
                code: "DATA1700-1",
                title: "Webprogrammering",
                description: "Webprogrammering ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/DATA1700/1/2021",
            },
            {
                id: 13,
                code: "DATA1600-1",
                title: "Programutvikling",
                description: "Programutvikling ved OsloMet.",
                link: "https://student.oslomet.no/nb/student/program/emne/DATA1600/1/2021",
            },


        ]
        
        // courses: [
        //     "DATA3900-1 Bacheloroppgave",
        //     "DATA3740-1 IT-Innovasjons- og entreprenørskapsprosjekt",
        //     "DAVE3625-1 Introduksjon til Kunstig Intelligens",
        //      ADSE3200-1 Visualisering
        //     "ITPE3200-1 Webapplikasjoner",
        //     "ITPE3100-1 Datasikkerhet",
        //     "DATA2500-1 Operativsystemer",
        //     "DATA2410-1 Datanettverk og skytjenester",
        //     "DATS2300-1 Algoritmer og datastrukturer",
        //     "DAFE2200-1 Systemutvikling",
        //     "ADSE2100-1 Menneske maskin interaksjon",
        //     "DATA1700-1 Webprogrammering",
        //     "DATA1600-1 Programutvikling",
        //     "DATA1500-1 Databaser",
        //     "DAPE1400-1 Programmering",
        //     "DAPE1300-1 Diskret matematikk",
        //     "DAFE1200-1 Webutvikling og inkluderende design",
        // ]
    },

    {
        id: 3,
        title: "(VGS) - Edvard Munch VGS",
        school: "Edvard Munch VGS",
        image: "/images/MunchLogo.png",
        description: "Studiespesialisering ved Edvard Munch VGS. "
    },
]

export default function DisplayUtdanning() {
    const [selectedUtdanning, setSelectedUtdanning] = useState<number | null>(null);

    const toggleExpandUtdanning = (id: number) => {
        setSelectedUtdanning(selectedUtdanning === id ? null : id);
    }

    return(
        <div className='max-w-3xl mx-auto p-6'>
            {utdanning.map((utdanning) => (
                <div
                    key={utdanning.id}
                    onClick={() => toggleExpandUtdanning(utdanning.id)}
                    className=' gap-4 p-4 cursor-pointer border rounded-lg shadow-md'>
                    <div className='flex items-center gap-4'>
                    <img src={utdanning.image} alt='logo' className='w-1/5 h-auto'/>
                    <div className='w-4/5'>
                        <div className='text-2xl md:text-lg'>{utdanning.title}</div>
                        <p>{utdanning.school}</p>
                    </div>
                    </div>
                    <div className='mx-auto'> 
                        {selectedUtdanning === utdanning.id && (
                            <div className='mt-4 p-6 border rounded-lg shadow-md bg-white flex flex-col gap-4'>
                                <div className='text-2xl md:text-lg'>{utdanning.description}</div>
                                {utdanning.courses && utdanning.courses.map((course) => (
                                    <div key={course.id} className='flex items-center gap-4'>
                                        {/* Table */}
                                        <div className='w-1/6'>
                                            <p>{course.code}</p>
                                        </div>
                                        <div className='w-3/6'>
                                            <h2>{course.title}</h2>
                                        </div>
                                        <div className='w-1/6 hover:text-blue-500'>
                                            <a href={course.link} target='_blank' rel='noreferrer'>Les mer</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}  
                    </div>
                </div>
            ))}
        </div>
    )
}